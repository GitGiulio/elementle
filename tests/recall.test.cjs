const test=require('node:test');
const assert=require('node:assert/strict');
const data=require('../data/elements.js');
const recall=require('../recall.js');
const round=(answer=26)=>({answer,attempts:[]});
test('Wordle exact matches consume occurrences before misplaced letters',()=>{
  for(const [guess,answer,want] of [
    ['lll','helium',['absent','absent','correct']],
    ['n','ne',['correct']],['en','ne',['present','present']],
    ['nee','ne',['correct','correct','absent']],
    ['aab','abc',['correct','absent','present']],['en','n',['absent','present']]
  ]) assert.deepEqual(recall.scoreLetters(guess,answer),want,`${guess} / ${answer}`);
});
test('recall rejects unknown names and symbols without consuming an attempt',()=>{
  assert.equal(recall.normalizeName(' ALUMINIUM '),'aluminum');
  assert.equal(recall.normalizeName('Caesium'),'cesium');
  for(const name of ['zzzz','constructor','Fe','Alumnium','','two words','iron2','veryveryveryverylong']) {
    const result=recall.submitAnswers(round(),{name,symbol:'fe'},data);
    assert.equal(result.error,'invalid-name'); assert.deepEqual(result.round.attempts,[]);
  }
  for(const symbol of ['xx','zz','Iron','','abc','2','!']) {
    const base=round(),result=recall.submitAnswers(base,{name:'iron',symbol},data);
    assert.equal(result.error,'invalid-symbol');assert.equal(result.round,base);assert.deepEqual(base.attempts,[]);
  }
});
test('existing names and symbols are accepted independently, with aliases and case normalisation',()=>{
  const mixed=recall.submitAnswers(round(),{name:'Carbon',symbol:'FE'},data);
  assert.equal(mixed.error,null);
  assert.deepEqual(mixed.round.attempts,[{name:'carbon',symbol:'fe'}]);
  assert.deepEqual(recall.getProgress(mixed.round,data),{nameSolved:false,symbolSolved:true,status:'playing'});
  for(let i=0;i<data.length;i++) {
    const result=recall.submitAnswers(round(),{name:` ${data[i].name.toUpperCase()} `,symbol:` ${data[(i+1)%data.length].symbol.toUpperCase()} `},data);
    assert.equal(result.error,null,data[i].name);
  }
  assert.deepEqual(recall.submitAnswers(round(),{name:' iron ',symbol:'FE'},data).round.attempts,[{name:'iron',symbol:'fe'}]);
  assert.equal(recall.getProgress(recall.submitAnswers(round(13),{name:'Aluminium',symbol:'al'},data).round,data).status,'won');
  assert.equal(recall.getProgress(recall.submitAnswers(round(55),{name:'Caesium',symbol:'cs'},data).round,data).status,'won');
});
test('partial success locks either field without revealing the other',()=>{
  const base=round();
  const named=recall.submitAnswers(base,{name:'iron',symbol:'cu'},data).round;
  assert.deepEqual(base.attempts,[]);
  assert.deepEqual(recall.getProgress(named,data),{nameSolved:true,symbolSolved:false,status:'playing'});
  const changed=recall.submitAnswers(named,{name:'nonsense',symbol:'fe'},data).round;
  assert.deepEqual(changed.attempts[1],{name:'iron',symbol:'fe'});
  assert.equal(recall.getProgress(changed,data).status,'won');
  const symbolFirst=recall.submitAnswers(base,{name:'carbon',symbol:'fe'},data).round;
  assert.deepEqual(recall.getProgress(symbolFirst,data),{nameSolved:false,symbolSolved:true,status:'playing'});
  assert.equal(recall.getProgress(recall.submitAnswers(symbolFirst,{name:'iron',symbol:''},data).round,data).status,'won');
  assert.equal(recall.getProgress(recall.submitAnswers(round(10),{name:'neon',symbol:'n'},data).round,data).symbolSolved,false);
});
test('effective duplicate pairs cost no attempt but a changed half does',()=>{
  const base=recall.submitAnswers(round(),{name:'iron',symbol:'cu'},data).round;
  assert.equal(recall.submitAnswers(base,{name:'',symbol:'cu'},data).error,'duplicate');
  assert.equal(recall.submitAnswers(base,{name:'',symbol:'zn'},data).error,null);
});
test('recall second field wins on turn eight, loss stops at eight',()=>{
  let base=round();
  for(const symbol of ['h','he','li','be','b','c','n']) base=recall.submitAnswers(base,{name:'iron',symbol},data).round;
  const won=recall.submitAnswers(base,{name:'',symbol:'fe'},data).round;
  assert.equal(won.attempts.length,8);assert.equal(recall.getProgress(won,data).status,'won');
  assert.equal(recall.submitAnswers(won,{name:'iron',symbol:'fe'},data).error,'finished');
  const lost=recall.submitAnswers(base,{name:'',symbol:'o'},data).round;
  assert.equal(recall.getProgress(lost,data).status,'lost');
  assert.equal(recall.submitAnswers(lost,{name:'iron',symbol:'fe'},data).error,'finished');
});
test('recall target selection excludes only the previous answer',()=>{
  assert.equal(recall.newRound(data,null,()=>0).answer,1);
  assert.equal(recall.newRound(data,null,()=>0.999999).answer,118);
  const next=Array.from({length:117},(_,i)=>recall.newRound(data,26,()=>(i+.5)/117).answer);
  assert.equal(new Set(next).size,117);assert.ok(!next.includes(26));
  assert.deepEqual(recall.newRound(data,26,()=>0).attempts,[]);
});
test('knowledge maps stay independent and preserve strongest previous clue',()=>{
  let base=recall.submitAnswers(round(),{name:'nitrogen',symbol:'na'},data).round;
  base=recall.submitAnswers(base,{name:'iodine',symbol:'f'},data).round;
  base=recall.submitAnswers(base,{name:'zinc',symbol:'zn'},data).round;
  const name=recall.getLetterKnowledge(base,'name',data),symbol=recall.getLetterKnowledge(base,'symbol',data);
  assert.equal(name.i,'correct');assert.equal(name.r,'present');assert.equal(name.z,'absent');
  assert.equal(symbol.f,'correct');assert.equal(symbol.z,'absent');assert.equal(symbol.i,undefined);
});
