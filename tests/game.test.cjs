const test=require('node:test');
const assert=require('node:assert/strict');
const elements=require('../data/elements.js');
const game=require('../game.js');
const el=n=>elements[n-1];
test('classic input accepts names, symbols, aliases and whitespace',()=>{
  assert.equal(game.findElement(' fe ',elements).atomicNumber,26);
  assert.equal(game.findElement('ALUMINIUM',elements).atomicNumber,13);
  assert.equal(game.findElement('caesium',elements).atomicNumber,55);
  assert.equal(game.findElement('',elements),null);
  assert.equal(game.findElement('doesnotexist',elements),null);
  assert.deepEqual(game.searchElements('',elements),[]);
  assert.deepEqual(game.searchElements('ca',elements).map(e=>e.name),['Cadmium','Calcium','Californium','Carbon']);
  assert.ok(game.searchElements('fe',elements).some(e=>e.atomicNumber===26));
});
test('keyboard suggestions start at either end and wrap predictably',()=>{
  assert.equal(game.moveSuggestion(-1,-1,4),3);
  assert.equal(game.moveSuggestion(-1,1,4),0);
  assert.equal(game.moveSuggestion(0,-1,4),3);
  assert.equal(game.moveSuggestion(3,1,4),0);
  assert.equal(game.moveSuggestion(-1,1,0),-1);
});
test('classic clues compare symbols and indicate the answer direction',()=>{
  assert.deepEqual(game.evaluateGuess(el(20),el(89)),{direction:'higher',letters:['present','present'],familyMatch:false});
  assert.deepEqual(game.evaluateGuess(el(26),el(9)),{direction:'lower',letters:['correct','absent'],familyMatch:false});
  assert.deepEqual(game.evaluateGuess(el(2),el(10)),{direction:'higher',letters:['absent','correct'],familyMatch:true});
  assert.deepEqual(game.evaluateGuess(el(26),el(26)),{direction:'equal',letters:['correct','correct'],familyMatch:true});
});
test('random rounds cover every initial target and exclude the last target',()=>{
  assert.equal(game.newRound(elements,null,()=>0).answer,1);
  assert.equal(game.newRound(elements,null,()=>0.999999).answer,118);
  assert.equal(new Set(Array.from({length:118},(_,i)=>game.newRound(elements,null,()=>(i+0.5)/118).answer)).size,118);
  const answers=Array.from({length:117},(_,i)=>game.newRound(elements,26,()=>(i+0.5)/117).answer);
  assert.equal(new Set(answers).size,117); assert.ok(!answers.includes(26));
});
test('classic rejects invalid/duplicate input without mutating a round',()=>{
  const round={answer:26,guesses:[],hintIndex:0,hintUsed:false};
  assert.equal(game.submitGuess(round,999,elements).error,'invalid');
  const next=game.submitGuess(round,1,elements).round;
  assert.deepEqual(round.guesses,[]);
  assert.equal(game.submitGuess(next,1,elements).error,'duplicate');
  assert.deepEqual(next.guesses,[1]);
});
test('classic wins on attempt eight and stops after either terminal result',()=>{
  const base={answer:26,guesses:[1,2,3,4,5,6,7],hintIndex:1,hintUsed:false};
  const won=game.submitGuess(base,26,elements).round;
  assert.equal(game.getStatus(won),'won');
  assert.equal(game.submitGuess(won,8,elements).error,'finished');
  const lost=game.submitGuess(base,8,elements).round;
  assert.equal(game.getStatus(lost),'lost');
  assert.equal(game.submitGuess(lost,26,elements).error,'finished');
  assert.equal(game.getStatus(game.submitGuess({...base,guesses:[]},26,elements).round),'won');
});
test('a hint is stable and new rounds reset progress',()=>{
  const round=game.newRound(elements,null,()=>0.7);
  assert.ok(round.hintIndex>=0 && round.hintIndex<=2);
  const hinted=game.useHint(round);
  assert.equal(hinted.hintUsed,true); assert.equal(round.hintUsed,false);
  assert.deepEqual(game.useHint(hinted),hinted);
  assert.equal(hinted.hintIndex,round.hintIndex);
  assert.deepEqual(hinted.guesses,[]);
});
test('name-only search lists alphabetised names without matching chemical symbols',()=>{
  assert.deepEqual(game.searchElements(' CA ',elements,false).map(e=>e.name),['Cadmium','Calcium','Californium','Carbon']);
  assert.deepEqual(game.searchElements('fe',elements,false).map(e=>e.name),['Fermium']);
  assert.deepEqual(game.searchElements('  ',elements,false),[]);
  assert.deepEqual(game.searchElements('nonsense',elements,false),[]);
  assert.ok(game.searchElements('fe',elements).some(e=>e.name==='Iron'));
  for(const element of elements)assert.ok(game.searchElements(element.name,elements,false).includes(element));
});

test('periodic-table positions keep all elements unique, with the f-block in detached rows',()=>{
  const positions=elements.map(e=>game.getTablePosition(e));
  assert.equal(new Set(positions.map(p=>`${p.row},${p.column}`)).size,118);
  for(const position of positions) {
    assert.ok(position.row>=1&&position.row<=9);
    assert.ok(position.column>=1&&position.column<=18);
  }
  for(const [number,row,column] of [[1,1,1],[2,1,18],[13,3,13],[57,8,3],[71,8,17],[72,6,4],[89,9,3],[103,9,17],[104,7,4],[118,7,18]]) {
    assert.deepEqual(game.getTablePosition(el(number)),{row,column});
  }
});
