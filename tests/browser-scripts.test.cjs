const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const scripts=[...html.matchAll(/<script\s+defer\s+src="([^"]+)"/g)].map(m=>m[1]);
test('the real browser script sequence parses as classic scripts',()=>{
  for(const file of scripts)new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
});
test('both game modes work without CommonJS, fetch, or any network API',()=>{
  const context=vm.createContext({});
  for(const file of scripts.filter(file=>file!=='app.js'))vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
  const result=vm.runInContext(`({
    count:ElementleElements.length,
    classic:ElementleGame.getStatus(ElementleGame.submitGuess({answer:26,guesses:[],hintIndex:0,hintUsed:false},26,ElementleElements).round),
    recall:ElementleRecall.getProgress(ElementleRecall.submitAnswers({answer:26,attempts:[]},{name:'iron',symbol:'fe'},ElementleElements).round,ElementleElements).status,
    storage:ElementleStorage.loadSession(()=>{throw Error('Blocked');},ElementleElements).session
  })`,context);
  assert.equal(result.count,118);assert.equal(result.classic,'won');assert.equal(result.recall,'won');assert.equal(result.storage,null);
});
