// Optional maintainer utility. The delivered elements.js is ready to play.
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const source=JSON.parse(fs.readFileSync(path.join(root,'data/sources/pubchem.json'),'utf8').replace(/^\uFEFF/,''));
const weights=JSON.parse(fs.readFileSync(path.join(root,'data/sources/atomic-weights.json'),'utf8'));
const overrides=JSON.parse(fs.readFileSync(path.join(root,'data/sources/configuration-overrides.json'),'utf8'));
// These saved tables have rowspans and some omitted opening <tr> tags.
// Split on closing rows and carry the atomic number into the child rows.
function isotopeRows(file) {
  const html=fs.readFileSync(path.join(root,'data/sources',file),'utf8').split('<tbody>')[1].split('</tbody>')[0];
  let number;
  return html.split('</tr>').flatMap(row=>{
    let cells=[...row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)].map(m=>m[1].replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim());
    if(cells.length>=5&&/^\d+$/.test(cells[0])){number=Number(cells[0]);cells=cells.slice(3);}
    if(!number||cells.length<2||!/^\[?\d+\]?$/.test(cells[0]))return [];
    return [{number,massNumber:Number(cells[0].replace(/[\[\]]/g,'')),display:cells[1]}];
  });
}
function nominal(value) {return Number(value.replace(/\([^)]*\)/g,'').replace(/\s/g,''));}
const isotopes={};
for(const row of isotopeRows('isotopic-abundances.html')) {
  if(row.display==='-')continue;
  const range=row.display.replace(/[\[\]]/g,'').split(',').map(nominal);
  const abundance=range.reduce((a,b)=>a+b,0)/range.length;
  if(!Number.isFinite(abundance))throw new Error(`Invalid abundance: ${row.display}`);
  if(!isotopes[row.number]||abundance>isotopes[row.number].rank)
    isotopes[row.number]={massNumber:row.massNumber,basis:row.number===82?'variable-abundance':'most-abundant',abundance:row.display,rank:abundance};
}
const units={Ma:365.25*86400*1e6,ka:365.25*86400*1e3,a:365.25*86400,d:86400,h:3600,min:60,s:1,ms:.001};
const radioactive={};
for(const row of isotopeRows('radioactive-elements.html')) {
  const value=row.display.replace(/\([^)]*\)/g,'').match(/([\d.]+)\s*(Ma|ka|a|d|h|min|ms|s)$/);
  if(!value)throw new Error(`Invalid half-life: ${row.display}`);
  const lifetime=Number(value[1])*units[value[2]];
  if(!radioactive[row.number]||lifetime>radioactive[row.number].rank)
    radioactive[row.number]={massNumber:row.massNumber,basis:'representative-long-lived',halfLife:row.display,rank:lifetime};
}
const families={
  Nonmetal:[1,6,7,8,15,16,34], 'Noble Gas':[2,10,18,36,54,86,118],
  'Alkali Metal':[3,11,19,37,55,87], 'Alkaline Earth Metal':[4,12,20,38,56,88],
  Metalloid:[5,14,32,33,51,52], Halogen:[9,17,35,53,85,117],
  Metal:[13,31,49,50,81,82,83,84,113,114,115,116],
  Lanthanide:Array.from({length:15},(_,i)=>57+i), Actinide:Array.from({length:15},(_,i)=>89+i)
};
const periods=[2,10,18,36,54,86,118];
const elements=source.map(row=>{
  const n=Number(row.AtomicNumber),period=periods.findIndex(end=>n<=end)+1;
  const family=Object.keys(families).find(f=>families[f].includes(n)) || 'Transition Metal';
  let group;
  if (n===1) group=1;
  else if(n===2) group=18;
  else if(n<=18) { const offset=n-(period===2?2:10); group=offset<=2?offset:offset+10; }
  else if(n<=54) group=n-(period===4?18:36);
  else if(n===55||n===87) group=1;
  else if(n===56||n===88) group=2;
  else if(family==='Lanthanide'||family==='Actinide') group=null;
  else group=n-(period===6?68:100);
  const weight=weights[n];
  // Bulk phase is deliberately unknown where observations are insufficient.
  const unknown=n===85||n===87||n>=99;
  const phase=unknown?{value:'unknown',certainty:'unknown'}:{value:row.StandardState.toLowerCase(),certainty:'measured'};
  const classification=`This element belongs to the ${family} family.`;
  const electronConfiguration={notation:overrides[n]?.notation||row.ElectronConfiguration.replace(/\s*\((?:calculated|predicted)\)/g,''),certainty:n>=104?'predicted':'tabulated'};
  const config=`Its ${electronConfiguration.certainty} electron configuration is ${electronConfiguration.notation}.`;
  const selected=isotopes[n]||radioactive[n];
  if(!selected)throw new Error(`No sourced isotope for atomic number ${n}`);
  const {rank,...isotope}=selected;
  const position=`Look in period ${period}, ${group===null?'in one of the two detached rows':`group ${group}`} of the periodic table.`;
  return {atomicNumber:n,name:row.Name,symbol:row.Symbol,family,period,group,
    atomicMass:weight?{display:weight,kind:'standard-weight'}:{display:'Not assigned',kind:'unknown'},
    phase,isotope,electronConfiguration,recallClue:config,hints:[classification,position,config]};
});
if(elements.length!==118) throw new Error('Expected 118 source records');
fs.writeFileSync(path.join(root,'data/elements.js'),
  '// Local factual dataset. Provenance and conventions: data/SOURCES.md\n'+
  'const ElementleElements = '+JSON.stringify(elements,null,2)+';\n'+
  'if (typeof module !== "undefined") module.exports = ElementleElements;\n');
console.log(`Generated ${elements.length} local element records.`);
