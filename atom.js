/* Pure atom data/geometry. Cloud samples illustrate hydrogen-like orbitals;
   neither their radii nor the enlarged nuclear packing are physical scale. */
const ElementleAtom=(()=>{
  'use strict';
  function expandConfiguration(element,elements,seen=new Set()) {
    if(seen.has(element.atomicNumber))throw new Error('Cyclic electron configuration');
    const next=new Set(seen).add(element.atomicNumber);
    let text=element.electronConfiguration.notation.trim(),shells=[];
    const core=text.match(/^\[([A-Z][a-z]?)\]/);
    if(core){const base=elements.find(e=>e.symbol===core[1]);if(!base)throw new Error('Unknown core');shells=expandConfiguration(base,elements,next);text=text.slice(core[0].length);}
    const tokens=text.replace(/\s/g,'').match(/\d[spdf]\d+?(?=\d[spdf]|$)/g)||[];
    if(tokens.join('')!==text.replace(/\s/g,''))throw new Error('Invalid electron configuration');
    for(const token of tokens) {
      const [,n,type,count]=token.match(/^(\d)([spdf])(\d+)$/),l='spdf'.indexOf(type),electrons=Number(count);
      if(l>=Number(n)||electrons<1||electrons>2*(2*l+1)||shells.some(s=>s.label===n+type))throw new Error('Invalid orbital occupancy');
      shells.push({n:Number(n),l,label:n+type,electrons});
    }
    if(shells.reduce((sum,s)=>sum+s.electrons,0)!==element.atomicNumber)throw new Error('Electron count does not equal Z');
    return shells.sort((a,b)=>a.n-b.n||a.l-b.l);
  }
  const shapes=[['s'],['pₓ','pᵧ','p_z'],['d_xy','d_yz','d_z²','d_xz','d_x²−y²'],['f_y(3x²−y²)','f_xyz','f_y(5z²−r²)','f_z(5z²−3r²)','f_x(5z²−r²)','f_z(x²−y²)','f_x(x²−3y²)']];
  function occupiedOrbitals(shells) {
    return shells.flatMap(s=>Array.from({length:2*s.l+1},(_,index)=>{
      const electrons=Number(s.electrons>index)+Number(s.electrons>2*s.l+1+index);
      return {...s,index,id:`${s.label}:${index}`,subshell:s.label,label:`${s.n}${shapes[s.l][index]}`,electrons};
    }).filter(o=>o.electrons));
  }
  function nucleus(protons,massNumber) {
    if(!Number.isInteger(protons)||!Number.isInteger(massNumber)||protons<1||massNumber<protons)throw new Error('Invalid nucleus counts');
    const limit=Math.ceil(Math.cbrt(massNumber)),positions=[];
    for(let x=-limit;x<=limit;x++)for(let y=-limit;y<=limit;y++)for(let z=-limit;z<=limit;z++)if((x+y+z)%2===0)positions.push({x,y,z});
    positions.sort((a,b)=>(a.x*a.x+a.y*a.y+a.z*a.z)-(b.x*b.x+b.y*b.y+b.z*b.z)||a.x-b.x||a.y-b.y||a.z-b.z);
    const chosen=positions.slice(0,massNumber),centre={x:0,y:0,z:0};
    for(const p of chosen)for(const axis of ['x','y','z'])centre[axis]+=p[axis]/massNumber;
    for(const p of chosen)for(const axis of ['x','y','z'])p[axis]-=centre[axis];
    const extent=Math.max(1,...chosen.map(p=>Math.hypot(p.x,p.y,p.z))),scale=.29/(extent+.7);
    return chosen.map((p,i)=>({x:p.x*scale,y:p.y*scale,z:p.z*scale,radius:scale*.67,
      type:Math.floor((i+1)*protons/massNumber)>Math.floor(i*protons/massNumber)?'proton':'neutron'}));
  }
  function randomGenerator(seed) {
    let state=seed>>>0;
    return ()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return (state+.5)/4294967296;};
  }
  function radialAmplitude(n,l,rho) {
    const degree=n-l-1,alpha=2*l+1;
    let previous=1,current=1+alpha-rho;
    for(let k=2;k<=degree;k++){const value=((2*k-1+alpha-rho)*current-(k-1+alpha)*previous)/k;previous=current;current=value;}
    const laguerre=degree===0?1:current;
    return Math.exp(-rho/2)*Math.pow(rho,l)*laguerre;
  }
  function angularAmplitude(l,index,x,y,z) {
    if(l===0)return 1;
    if(l===1)return [x,y,z][index];
    if(l===2)return [2*x*y,2*y*z,(3*z*z-1)/2,2*x*z,x*x-y*y][index];
    const norm=16/(3*Math.sqrt(15));
    return [y*(3*x*x-y*y),3*Math.sqrt(3)*x*y*z,y*(5*z*z-1)/norm,z*(5*z*z-3)/2,x*(5*z*z-1)/norm,3*Math.sqrt(3)*z*(x*x-y*y)/2,x*(x*x-3*y*y)][index];
  }
  function cloud(orbitals,seed,pointsPerOrbital=180) {
    const points=[],electrons=[];
    for(const orbital of orbitals) {
      const random=randomGenerator(seed*101+orbital.n*59+orbital.l*13+orbital.index),cdf=[],steps=640,maxRho=4*orbital.n+12;
      let total=0;
      for(let i=0;i<=steps;i++){const rho=maxRho*i/steps;total+=rho*rho*radialAmplitude(orbital.n,orbital.l,rho)**2;cdf.push(total);}
      const sample=()=>{
        let x,y,z,amplitude;
        do {z=random()*2-1;const phi=random()*2*Math.PI,r=Math.sqrt(1-z*z);x=r*Math.cos(phi);y=r*Math.sin(phi);amplitude=angularAmplitude(orbital.l,orbital.index,x,y,z);} while(random()>amplitude*amplitude);
        const target=random()*total;
        let low=0,high=steps;
        while(low<high){const mid=(low+high)>>>1;if(cdf[mid]<target)low=mid+1;else high=mid;}
        const rho=maxRho*(Math.max(0,low-1)+random())/steps;
        const mean=3*orbital.n-orbital.l*(orbital.l+1)/orbital.n;
        const radius=rho/mean*(.48+.15*orbital.n);
        return {x:x*radius,y:y*radius,z:z*radius,phase:amplitude*radialAmplitude(orbital.n,orbital.l,rho)>=0?1:-1,orbital:orbital.id,occupancy:orbital.electrons,l:orbital.l};
      };
      for(let i=0;i<pointsPerOrbital;i++)points.push(sample());
      for(let i=0;i<orbital.electrons;i++)electrons.push(sample());
    }
    return {points,electrons};
  }
  return {expandConfiguration,occupiedOrbitals,nucleus,cloud,angularAmplitude,radialAmplitude};
})();
if(typeof module!=='undefined')module.exports=ElementleAtom;
