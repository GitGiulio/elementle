const test = require('node:test');
const assert = require('node:assert/strict');
const elements = require('../data/elements.js');
const classicHints = require('../data/sources/classic-hints.json');

const families = {
  Nonmetal: [1,6,7,8,15,16,34], 'Noble Gas':[2,10,18,36,54,86,118],
  'Alkali Metal':[3,11,19,37,55,87], 'Alkaline Earth Metal':[4,12,20,38,56,88],
  Metalloid:[5,14,32,33,51,52], Halogen:[9,17,35,53,85,117],
  Metal:[13,31,49,50,81,82,83,84,113,114,115,116],
  'Transition Metal':[21,22,23,24,25,26,27,28,29,30,39,40,41,42,43,44,45,46,47,48,72,73,74,75,76,77,78,79,80,104,105,106,107,108,109,110,111,112],
  Lanthanide:[57,58,59,60,61,62,63,64,65,66,67,68,69,70,71],
  Actinide:[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]
};
test('Classic hints teach sourced facts without exposing the answer or reusing structural clues',()=>{
  assert.deepEqual(Object.keys(classicHints).map(Number),elements.map(e=>e.atomicNumber));
  for(const e of elements) {
    assert.equal(new Set(e.hints).size,3,e.name);
    assert.ok(classicHints[e.atomicNumber].sources.length>0,e.name);
    assert.ok(classicHints[e.atomicNumber].sources.every(url=>url.startsWith('https://')),e.name);
    for(const hint of e.hints) {
      assert.ok(!/belongs to the|Look in period|electron configuration/.test(hint),`${e.name}: ${hint}`);
      const words=hint.toLowerCase().match(/[a-z]+/g)||[];
      for(const name of [e.name,...(e.atomicNumber===13?['Aluminium']:[]),...(e.atomicNumber===55?['Caesium']:[])])
        assert.ok(!words.includes(name.toLowerCase()),`${e.name}: ${hint}`);
      if(e.symbol.length>1)assert.ok(!new RegExp(`\\b${e.symbol}\\b`).test(hint),`${e.name}: ${hint}`);
    }
  }
  assert.match(elements[15].hints.join(' '),/yellow/);
  assert.match(elements[15].hints.join(' '),/odourless/);
  assert.match(elements[12].hints.join(' '),/1825/);
  assert.equal(elements[13].recallClue,'Its tabulated electron configuration is [Ne]3s2 3p2.');
});
test('all 118 identities and official family memberships are complete', () => {
  assert.equal(elements.length,118);
  assert.deepEqual(elements.map(e=>e.atomicNumber),Array.from({length:118},(_,i)=>i+1));
  assert.equal(new Set(elements.map(e=>e.name)).size,118);
  assert.equal(new Set(elements.map(e=>e.symbol)).size,118);
  for (const [family,numbers] of Object.entries(families)) {
    assert.deepEqual(elements.filter(e=>e.family===family).map(e=>e.atomicNumber),numbers,family);
  }
  assert.equal(elements[0].name,'Hydrogen'); assert.equal(elements[117].symbol,'Og');
});
test('each property card has supported values and three non-spoiling hints', () => {
  for (const e of elements) {
    assert.ok(Number.isInteger(e.period) && e.period>=1 && e.period<=7,e.name);
    assert.ok(e.group===null || Number.isInteger(e.group) && e.group>=1 && e.group<=18,e.name);
    assert.ok(['standard-weight','isotope-mass-number','unknown'].includes(e.atomicMass.kind));
    assert.ok(e.atomicMass.display.length>0);
    assert.ok(['solid','liquid','gas','unknown'].includes(e.phase.value));
    assert.ok(e.phase.value==='unknown' ? e.phase.certainty==='unknown' : ['measured','predicted'].includes(e.phase.certainty));
    assert.equal(e.hints.length,3);
    assert.ok(e.hints.every(h=>typeof h==='string' && h.length>15));
    assert.ok(e.recallClue.length>15);
    const aliases=[e.name,...(e.atomicNumber===13?['Aluminium']:[]),...(e.atomicNumber===55?['Caesium']:[])];
    for (const name of aliases) assert.ok(!e.recallClue.toLowerCase().includes(name.toLowerCase()),e.name);
  }
  assert.equal(elements[12].group,13);
  assert.equal(elements[56].group,null);
  assert.equal(elements[70].group,null);
  assert.equal(elements[102].group,null);
  assert.equal(elements[71].group,4);
  assert.equal(elements[85].group,18);
  assert.equal(elements[103].group,4);
  assert.equal(elements[117].group,18);
});
