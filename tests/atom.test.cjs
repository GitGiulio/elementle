const test=require('node:test');
const assert=require('node:assert/strict');
const elements=require('../data/elements.js');

test('isotope choices come from abundance or explicit long-lived representatives, never rounded weights',()=>{
  for(const [z,a,basis] of [[1,1,'most-abundant'],[18,40,'most-abundant'],[26,56,'most-abundant'],[43,97,'representative-long-lived'],[54,132,'most-abundant'],[82,208,'variable-abundance'],[92,238,'most-abundant'],[103,266,'representative-long-lived'],[118,294,'representative-long-lived']]) {
    assert.equal(elements[z-1].isotope?.massNumber,a,`mass number for Z=${z}`);
    assert.equal(elements[z-1].isotope.basis,basis);
  }
  for(const e of elements){assert.ok(e.isotope.massNumber>=e.atomicNumber);assert.ok(e.electronConfiguration.notation);}
});

test('all ground configurations expand to Z electrons, including exceptions and noble gas cores',()=>{
  const atom=require('../atom.js');
  for(const e of elements) {
    const shells=atom.expandConfiguration(e,elements),orbitals=atom.occupiedOrbitals(shells);
    assert.equal(shells.reduce((sum,s)=>sum+s.electrons,0),e.atomicNumber,e.name);
    assert.equal(orbitals.reduce((sum,o)=>sum+o.electrons,0),e.atomicNumber,e.name);
    assert.equal(new Set(shells.map(s=>s.label)).size,shells.length);
    for(const s of shells){assert.ok(s.l<s.n);assert.ok(s.electrons<=2*(2*s.l+1));}
    assert.ok(orbitals.every(o=>o.electrons===1||o.electrons===2));
  }
  const counts=z=>Object.fromEntries(atom.expandConfiguration(elements[z-1],elements).map(s=>[s.label,s.electrons]));
  assert.equal(counts(24)['3d'],5);assert.equal(counts(24)['4s'],1);
  assert.equal(counts(29)['3d'],10);assert.equal(counts(29)['4s'],1);
  assert.equal(counts(46)['4d'],10);assert.equal(counts(46)['5s'],undefined);
  assert.equal(counts(103)['7p'],1);
  assert.deepEqual(atom.occupiedOrbitals([{n:2,l:1,label:'2p',electrons:4}]).map(o=>o.electrons),[2,1,1]);
  assert.throws(()=>atom.expandConfiguration({...elements[0],electronConfiguration:{notation:'1s3'}},elements));
});

test('every nucleus has exactly Z protons and A−Z neutrons with finite, unique 3D centres',()=>{
  const atom=require('../atom.js');
  for(const e of elements) {
    const particles=atom.nucleus(e.atomicNumber,e.isotope.massNumber);
    assert.equal(particles.filter(p=>p.type==='proton').length,e.atomicNumber,e.name);
    assert.equal(particles.filter(p=>p.type==='neutron').length,e.isotope.massNumber-e.atomicNumber,e.name);
    assert.equal(new Set(particles.map(p=>`${p.x},${p.y},${p.z}`)).size,particles.length);
    assert.ok(particles.every(p=>[p.x,p.y,p.z,p.radius].every(Number.isFinite)&&p.radius>0));
    for(const axis of ['x','y','z'])assert.ok(Math.abs(particles.reduce((sum,p)=>sum+p[axis],0)/particles.length)<1e-12,'nucleus stays centred');
  }
});

test('clouds and electron markers are reproducible, finite, and match occupied orbital counts',()=>{
  const atom=require('../atom.js');
  for(const z of [1,8,26,58,92,118]) {
    const orbitals=atom.occupiedOrbitals(atom.expandConfiguration(elements[z-1],elements));
    const scene=atom.cloud(orbitals,z,20);
    assert.equal(scene.electrons.length,z);
    assert.equal(scene.points.length,20*orbitals.length);
    assert.deepEqual(scene,atom.cloud(orbitals,z,20));
    assert.ok([...scene.points,...scene.electrons].every(p=>[p.x,p.y,p.z].every(Number.isFinite)));
    for(const o of orbitals){assert.equal(scene.electrons.filter(p=>p.orbital===o.id).length,o.electrons);assert.ok(scene.points.filter(p=>p.orbital===o.id).every(p=>p.l===o.l));}
  }
  assert.equal(atom.angularAmplitude(1,0,0,1,0),0,'p_x has a yz nodal plane');
  assert.equal(atom.angularAmplitude(2,0,0,1,0),0,'d_xy has a yz nodal plane');
  assert.ok(Math.abs(atom.angularAmplitude(3,2,0,2/Math.sqrt(15),Math.sqrt(11/15))-1)<1e-12,'f angular rejection envelope is normalised');
  assert.equal(atom.radialAmplitude(2,0,2),0,'2s has a radial node at rho=2');
});

test('sampled wavefunction phase alternates across radial nodes as well as angular nodes',()=>{
  const atom=require('../atom.js');
  const orbitals=atom.occupiedOrbitals([{n:2,l:0,label:'2s',electrons:2}]);
  const cloud=atom.cloud(orbitals,26,1000);
  assert.ok(cloud.points.some(p=>Math.hypot(p.x,p.y,p.z)<.26));
  assert.ok(cloud.points.some(p=>Math.hypot(p.x,p.y,p.z)>.26));
  for(const p of cloud.points)assert.equal(p.phase,Math.hypot(p.x,p.y,p.z)<.26?1:-1);
});
