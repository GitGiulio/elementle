/* Native, on-demand canvas projection of the 3D model. No external assets. */
const ElementleAtomView=(()=>{
  'use strict';
  let nextId=0;
  const make=(tag,className,text)=>{const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=text;return e;};
  function openDialog(element,elements,{title='Inspect the atom.',state,onClose}={}) {
    const id=`atom-dialog-${++nextId}`,dialog=make('dialog','atom-dialog');dialog.setAttribute('aria-labelledby',id);
    const header=make('div','dialog-header'),heading=make('h2','',title);heading.id=id;
    const close=make('button','icon-button','×');close.type='button';close.setAttribute('aria-label','Close atom model');close.addEventListener('click',()=>dialog.close());header.append(heading,close);
    const view=create(element,elements,{expanded:true,state});dialog.append(header,view.element);document.body.append(dialog);
    dialog.addEventListener('close',()=>{view.destroy();dialog.remove();onClose?.(view.state);},{once:true});
    dialog.showModal();
    return {dialog,view,destroy(){view.destroy();dialog.remove();}};
  }
  function create(element,elements,options={}) {
    const id=`atom-${++nextId}`,shells=ElementleAtom.expandConfiguration(element,elements),orbitals=ElementleAtom.occupiedOrbitals(shells);
    const nucleons=ElementleAtom.nucleus(element.atomicNumber,element.isotope.massNumber);
    const state=Object.assign({yaw:-.45,pitch:.25,zoom:1,selection:'all'},options.state);
    const section=make('section',`atom-model${options.expanded?' atom-expanded':''}`);section.setAttribute('aria-label','Interactive atom model');
    const heading=make('p','side-label','THE ATOM IN 3D');
    const isotope=make('p','atom-isotope',`Mass number ${element.isotope.massNumber}`);
    const basis=element.isotope.basis==='most-abundant'?null:make('p','atom-basis',element.isotope.basis==='variable-abundance'?'Representative isotope; natural abundances vary by material':'Representative long-lived isotope');
    if(basis&&element.isotope.halfLife)basis.append(document.createTextNode(` · half-life ${element.isotope.halfLife}. Lifetimes can have overlapping uncertainties.`));
    const counts=make('div','atom-counts');
    for(const [type,count,label] of [['proton',element.atomicNumber,'protons'],['neutron',element.isotope.massNumber-element.atomicNumber,'neutrons'],['electron',element.atomicNumber,'electrons']]) {
      const item=make('span',`atom-count ${type}`);item.append(make('i'),make('strong','',String(count)),document.createTextNode(` ${count===1?label.slice(0,-1):label}`));counts.append(item);
    }
    const orbitalLegend=make('div','atom-orbital-legend');orbitalLegend.setAttribute('aria-label','Orbital colours');orbitalLegend.append(make('span','','Orbitals:'));
    for(const type of 'spdf'){const key=make('span',`type-${type}`);key.append(make('i'),document.createTextNode(type));orbitalLegend.append(key);}
    const stage=make('div','atom-stage'),canvas=make('canvas','atom-canvas');canvas.tabIndex=0;
    const describe=(count,label)=>`${count} ${label}${count===1?'':'s'}`;
    canvas.setAttribute('role','img');canvas.setAttribute('aria-label',`Schematic neutral atom with ${describe(element.atomicNumber,'proton')}, ${describe(element.isotope.massNumber-element.atomicNumber,'neutron')} and ${describe(element.atomicNumber,'electron')}. Drag or use arrow keys to rotate. Plus and minus zoom; Home resets.`);
    const tips=make('p','atom-tips','Drag to rotate · + / − to zoom');tips.id=`${id}-tips`;canvas.setAttribute('aria-describedby',tips.id);stage.append(canvas);
    const controls=make('div','atom-controls'),zoomLabel=make('output','atom-zoom');
    const control=(text,label,action)=>{const b=make('button','',text);b.type='button';b.setAttribute('aria-label',label);b.title=label;b.addEventListener('click',action);return b;};
    const zoomOut=control('−','Zoom atom out',()=>zoom(-.2)),zoomIn=control('+','Zoom atom in',()=>zoom(.2));
    const reset=control('↺','Reset atom view',()=>{Object.assign(state,{yaw:-.45,pitch:.25,zoom:1,selection:'all'});select.value='all';updateScene();});
    controls.append(zoomOut,zoomIn,reset);
    const expand=control('↗','Expand atom model',openExpanded);if(!options.expanded)controls.append(expand);
    const viewLabel=make('label','atom-view-label','Display');viewLabel.htmlFor=`${id}-display`;
    const select=make('select','atom-select');select.id=viewLabel.htmlFor;
    for(const [value,label] of [['all','All occupied orbitals'],['nucleus','Nucleus only']]) {const option=make('option','',label);option.value=value;select.append(option);}
    const subshellGroup=make('optgroup');subshellGroup.label='Isolate a subshell';
    for(const shell of shells){const option=make('option','',`${shell.label} · ${shell.electrons} electron${shell.electrons===1?'':'s'}`);option.value=`sub:${shell.label}`;subshellGroup.append(option);}select.append(subshellGroup);
    const orbitalGroup=make('optgroup');orbitalGroup.label='Isolate a spatial orbital';
    for(const orbital of orbitals){const option=make('option','',`${orbital.label} · ${orbital.electrons} electron${orbital.electrons===1?'':'s'}`);option.value=`orb:${orbital.id}`;orbitalGroup.append(option);}select.append(orbitalGroup);select.value=state.selection;
    const details=make('details','atom-details'),summary=make('summary','','Orbital occupancy');details.append(summary);
    details.append(make('p','atom-basis',`${element.electronConfiguration.certainty==='predicted'?'Predicted':'Tabulated'} neutral ground state. Boxes show conventional Hund/Pauli filling; orientations are illustrative.`));
    for(const shell of shells) {
      const row=make('div','atom-orbital-row'),boxes=make('div','atom-orbital-boxes');row.append(make('span','atom-subshell',shell.label));
      for(let index=0;index<2*shell.l+1;index++) {
        const occupancy=orbitals.find(o=>o.id===`${shell.label}:${index}`)?.electrons||0;
        const box=make('span','atom-orbital-box',occupancy===2?'↑↓':occupancy===1?'↑':'');box.setAttribute('aria-label',`${shell.label}, orbital ${index+1}, ${occupancy} electrons`);boxes.append(box);
      }
      row.append(boxes,make('span','atom-subshell-total',String(shell.electrons)));details.append(row);
    }
    details.append(make('p','atom-basis','Clouds use hydrogen-like radial nodes and s/p/d/f angular shapes. Pastel colours distinguish orbital types: mint s, blue p, lavender d and pink f. Bright dots indicate electron occupancy, not measured positions or trajectories.'));
    if(element.electronConfiguration.certainty==='predicted')details.append(make('p','atom-basis','This superheavy configuration is predicted; it is not a measured orbital map.'));
    section.append(heading,isotope);if(basis)section.append(basis);
    section.append(counts,orbitalLegend,stage,controls,zoomLabel,tips,viewLabel,select,details);
    const context=canvas.getContext('2d');
    if(!context){stage.append(make('p','atom-note','3D drawing is unavailable in this browser. The particle counts and orbital occupancy remain available below.'));canvas.hidden=true;}
    let scene={points:[],electrons:[]},bound=2,frame=0,drag=null,expandedView=null,destroyed=false;
    function updateScene() {
      const visible=state.selection==='nucleus'?[]:orbitals.filter(o=>state.selection==='all'||state.selection===`sub:${o.subshell}`||state.selection===`orb:${o.id}`);
      scene=ElementleAtom.cloud(visible,element.atomicNumber,Math.max(100,Math.floor(4500/Math.max(1,visible.length))));
      const radii=scene.points.map(p=>Math.hypot(p.x,p.y,p.z)).sort((a,b)=>a-b);
      bound=state.selection==='nucleus'?.36:Math.max(1.1,radii[Math.floor(radii.length*.99)]||1.1);
      schedule();
    }
    function schedule(){if(!destroyed&&!frame)frame=requestAnimationFrame(draw);}
    function zoom(change){state.zoom=Math.max(.6,Math.min(3,state.zoom+change));schedule();}
    function rotate(p) {
      const cosY=Math.cos(state.yaw),sinY=Math.sin(state.yaw),cosP=Math.cos(state.pitch),sinP=Math.sin(state.pitch);
      const x=p.x*cosY+p.z*sinY,z=-p.x*sinY+p.z*cosY;
      return {x,y:p.y*cosP-z*sinP,z:p.y*sinP+z*cosP};
    }
    function draw() {
      frame=0;if(destroyed||!context)return;
      const width=canvas.clientWidth,height=canvas.clientHeight;if(!width||!height)return;
      const ratio=Math.min(window.devicePixelRatio||1,2);
      if(canvas.width!==Math.round(width*ratio)||canvas.height!==Math.round(height*ratio)){canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);}
      context.setTransform(ratio,0,0,ratio,0,0);context.clearRect(0,0,width,height);
      const style=getComputedStyle(canvas),colours=[...'spdf'].map(type=>style.getPropertyValue(`--orbital-${type}`).trim());
      const scale=.43*Math.min(width,height)/bound*state.zoom,camera=5*bound;
      const project=p=>{const r=rotate(p),perspective=camera/(camera-r.z);return {...p,x:width/2+r.x*scale*perspective,y:height/2-r.y*scale*perspective,z:r.z,scale:scale*perspective};};
      const particles=[...scene.points.map(p=>({...p,type:'cloud'})),...scene.electrons.map(p=>({...p,type:'electron'})),...nucleons].map(project).sort((a,b)=>a.z-b.z);
      for(const p of particles) {
        if(p.type==='cloud') {context.globalAlpha=p.occupancy*.16;context.fillStyle=colours[p.l];const size=options.expanded?1.8:1.35;context.fillRect(p.x,p.y,size,size);context.globalAlpha=1;continue;}
        const radius=p.type==='electron'?2.2*Math.sqrt(state.zoom):p.radius*p.scale;
        context.beginPath();context.arc(p.x,p.y,radius,0,Math.PI*2);
        if(p.type==='electron'){context.fillStyle=colours[p.l];context.fill();context.strokeStyle='#edf9ef';context.lineWidth=.5;context.stroke();}
        else {
          const gradient=context.createRadialGradient(p.x-radius*.3,p.y-radius*.35,radius*.08,p.x,p.y,radius);
          gradient.addColorStop(0,p.type==='proton'?'#b84448':'#f1f2f4');gradient.addColorStop(.55,p.type==='proton'?'#7f1d1d':'#d1d5db');gradient.addColorStop(1,p.type==='proton'?'#4b1118':'#89919c');
          context.fillStyle=gradient;context.fill();
        }
      }
      // A small orientation triad, not electron trajectories.
      const origin={x:21,y:height-23};context.font='9px system-ui';context.lineWidth=1;
      for(const [label,p] of [['x',{x:1,y:0,z:0}],['y',{x:0,y:1,z:0}],['z',{x:0,y:0,z:1}]]) {
        const r=rotate(p);context.strokeStyle='#77867d';context.beginPath();context.moveTo(origin.x,origin.y);context.lineTo(origin.x+r.x*15,origin.y-r.y*15);context.stroke();context.fillStyle='#a6b5ad';context.fillText(label,origin.x+r.x*20-3,origin.y-r.y*20+3);
      }
      zoomLabel.textContent=`Zoom ${Math.round(state.zoom*100)}%`;zoomOut.disabled=state.zoom<=.6;zoomIn.disabled=state.zoom>=3;
    }
    function openExpanded() {
      if(expandedView)return;
      expandedView=openDialog(element,elements,{state:{...state},onClose(nextState){Object.assign(state,nextState);select.value=state.selection;expandedView=null;if(!destroyed){updateScene();expand.focus();}}});
    }
    select.addEventListener('change',()=>{state.selection=select.value;updateScene();});
    canvas.addEventListener('pointerdown',event=>{if(event.button!==0||drag)return;event.preventDefault();drag={id:event.pointerId,x:event.clientX,y:event.clientY};canvas.setPointerCapture(event.pointerId);canvas.focus();});
    canvas.addEventListener('pointermove',event=>{if(!drag||event.pointerId!==drag.id)return;state.yaw+=(event.clientX-drag.x)*.012;state.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,state.pitch+(event.clientY-drag.y)*.012));drag.x=event.clientX;drag.y=event.clientY;schedule();});
    const endDrag=event=>{if(drag?.id===event.pointerId)drag=null;};
    for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,endDrag);
    canvas.addEventListener('keydown',event=>{
      if(event.ctrlKey||event.metaKey||event.altKey)return;
      if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home'].includes(event.key))return;
      event.preventDefault();
      if(event.key==='Home'){reset.click();return;}
      if(event.key==='+'||event.key==='=')zoom(.2);else if(event.key==='-')zoom(-.2);
      else {if(event.key==='ArrowLeft')state.yaw-=.15;if(event.key==='ArrowRight')state.yaw+=.15;if(event.key==='ArrowUp')state.pitch-=.15;if(event.key==='ArrowDown')state.pitch+=.15;state.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,state.pitch));schedule();}
    });
    const observer=new ResizeObserver(schedule);observer.observe(stage);updateScene();
    return {element:section,atomicNumber:element.atomicNumber,state,destroy(){if(destroyed)return;destroyed=true;observer.disconnect();cancelAnimationFrame(frame);if(expandedView){expandedView.destroy();expandedView=null;}}};
  }
  return {create,openDialog};
})();
