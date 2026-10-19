const test=require('node:test');
const assert=require('node:assert/strict');
const data=require('../data/elements.js');
const storage=require('../storage.js');
const key='elementle-practice.v1';
const classic=()=>({answer:26,guesses:[1],hintIndex:2,hintUsed:true});
const recall=()=>({answer:26,attempts:[{name:'iron',symbol:'xx'}]});
const session=()=>({activeMode:'recall',classic:classic(),recall:recall()});
function memory(value) {
  const values=new Map([['unrelated','untouched']]);if(value!==undefined)values.set(key,value);
  return {values,getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v)};
}
function load(value) { const store=memory(JSON.stringify({version:1,session:value}));return storage.loadSession(()=>store,data); }
test('session save restores both modes and partial recall progress',()=>{
  const store=memory(),value=session();
  assert.deepEqual(storage.saveSession(()=>store,value),{saved:true,warning:null});
  assert.deepEqual(storage.loadSession(()=>store,data),{session:value,warning:null});
  assert.equal(store.values.get('unrelated'),'untouched');
  assert.equal(JSON.parse(store.values.get(key)).version,1);
});
test('previously accepted free-text history survives a validation-rule update',()=>{
  const value=session();value.recall.attempts=[{name:'zzzz',symbol:'xx'},{name:'iron',symbol:'xy'}];
  assert.deepEqual(load(value),{session:value,warning:null});
});
test('null unvisited rounds and terminal transcripts restore',()=>{
  assert.deepEqual(load({activeMode:'classic',classic:null,recall:null}).session,{activeMode:'classic',classic:null,recall:null});
  const value=session();value.classic.guesses=[1,26];value.recall.attempts.push({name:'iron',symbol:'fe'});
  assert.deepEqual(load(value),{session:value,warning:null});
  value.activeMode='classic';assert.equal(load(value).session.activeMode,'classic');
});
test('missing saves are normal while unreadable envelopes give notices',()=>{
  assert.deepEqual(storage.loadSession(()=>memory(),data),{session:null,warning:null});
  for(const raw of ['{','null','[]',JSON.stringify({version:2,session:session()}),JSON.stringify({version:1,session:null})]) {
    const result=storage.loadSession(()=>memory(raw),data);assert.equal(result.session,null);assert.ok(result.warning);
  }
});
test('a broken classic round does not discard valid recall progress',()=>{
  const invalids=[null,{...classic(),answer:119},{...classic(),answer:'26'},{...classic(),guesses:[1,1]},
    {...classic(),guesses:[26,1]},{...classic(),guesses:[1,2,3,4,5,6,7,8,9]},
    {...classic(),guesses:[999]},{...classic(),hintIndex:3},{...classic(),hintIndex:'1'},
    {...classic(),hintUsed:'true'},{...classic(),guesses:'no'}];
  for(const invalid of invalids.slice(1)) {
    const result=load({...session(),classic:invalid});assert.equal(result.session.classic,null);assert.deepEqual(result.session.recall,recall());assert.ok(result.warning);
  }
});
test('malformed recall attempts are reset independently',()=>{
  const invalids=[{answer:119,attempts:[]},{answer:26,attempts:[null]},
    {answer:26,attempts:[{name:'IRON',symbol:'xx'}]},
    {answer:26,attempts:[{name:'iron',symbol:'xxx'}]},
    {answer:26,attempts:[{name:'iron',symbol:'xx'},{name:'iron',symbol:'xx'}]},
    {answer:26,attempts:[{name:'iron',symbol:'xx'},{name:'tin',symbol:'xy'}]},
    {answer:26,attempts:[{name:'iron',symbol:'fe'},{name:'iron',symbol:'xy'}]},
    {answer:26,attempts:Array.from({length:9},(_,i)=>({name:'iron',symbol:'a'+String.fromCharCode(97+i)}))},
    {answer:13,attempts:[{name:'aluminium',symbol:'xx'}]}];
  for(const invalid of invalids) {
    const result=load({...session(),recall:invalid});assert.equal(result.session.recall,null);assert.deepEqual(result.session.classic,classic());assert.ok(result.warning);
  }
});
test('invalid active mode recovers as classic without discarding either round',()=>{
  const result=load({...session(),activeMode:'invalid'});assert.equal(result.session.activeMode,'classic');assert.deepEqual(result.session.recall,recall());assert.ok(result.warning);
});
test('storage getter, read, write and quota failures never escape',()=>{
  const denied=()=>{throw new Error('Denied');};
  assert.equal(storage.loadSession(denied,data).session,null);assert.ok(storage.loadSession(denied,data).warning);
  assert.equal(storage.saveSession(denied,session()).saved,false);
  const store={getItem(){throw new Error('Read denied');},setItem(){throw new Error('Quota');}};
  assert.equal(storage.loadSession(()=>store,data).session,null);
  assert.equal(storage.saveSession(()=>store,session()).saved,false);
});
