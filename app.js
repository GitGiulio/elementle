/* Local-only UI. The data and pure rule APIs are loaded in index.html order. */
(() => {
  'use strict';
  const data=ElementleElements, game=ElementleGame, recall=ElementleRecall;
  const $=selector=>document.querySelector(selector);
  const node=(tag,className,text)=>{
    const value=document.createElement(tag);
    if(className) value.className=className;
    if(text!==undefined) value.textContent=text;
    return value;
  };
  const restored=ElementleStorage.loadSession(()=>window.localStorage,data);
  let session=restored.session||{activeMode:'classic',classic:null,recall:null};
  if(!session[session.activeMode])session[session.activeMode]=session.activeMode==='classic'?game.newRound(data):recall.newRound(data);
  let classicDraft='', hintVisible=Boolean(session.classic?.hintUsed), suggestions=[], suggestionIndex=-1, suggestionInput=null;
  let recallDraft={name:'',symbol:''},aliasNote='';
  const element=n=>data.find(e=>e.atomicNumber===n);
  function announce(message,error=false) {
    const status=$('#announcement'); status.classList.toggle('error',error); status.textContent=message;
  }
  function save() {
    const result=ElementleStorage.saveSession(()=>window.localStorage,session);
    if(result.warning)showSaveNotice(result.warning);
  }
  function showSaveNotice(message) { $('#save-notice').textContent=message;$('#save-notice').hidden=false; }
  function button(text,className,action) {
    const b=node('button',className,text); b.type='button'; b.addEventListener('click',action); return b;
  }
  function renderSidebar(count,status) {
    const aside=$('#round-panel'); aside.replaceChildren();
    const identity=node('div','side-identity');
    identity.append(node('div','side-symbol','∞'),node('p','eyebrow','A DAILY GAME. WITHOUT THE WAIT.'),node('h2','side-title','A little chemistry. A sharper memory.'),node('p','side-copy','An independent practice space for the periodic table. One element at a time.'));
    const progress=node('section','side-section'); progress.append(node('p','side-label','THIS EXPERIMENT'));
    const number=node('div','attempt-count'); number.append(node('strong','',String(count).padStart(2,'0')),node('span','','/ 08 attempts')); progress.append(number);
    const pips=node('div','progress-pips'); pips.setAttribute('aria-hidden','true');
    for(let i=0;i<8;i++) pips.append(node('span',i<count?'filled':''));
    progress.append(pips,node('p','small-copy',status==='playing'?'Take your time. Follow the clues.':status==='won'?'A hypothesis confirmed.':'Every experiment teaches you something.'));
    const legend=node('section','side-section side-legend'); legend.append(node('p','side-label','READ THE FEEDBACK'));
    const rows=node('div','legend');
    for(const [className,text] of [['correct','Right letter, right place'],['present','Right letter, other place'],['absent','Letter not in the symbol']]) {
      const row=node('div','legend-row'); row.append(node('span',`legend-dot ${className}`),node('span','',text)); rows.append(row);
    }
    const direction=node('div','legend-row');direction.append(node('span','legend-arrow','↕'),node('span','','Answer is higher or lower'));rows.append(direction);
    legend.append(rows);aside.append(identity,progress,legend);
  }
  function renderResult(area,status,answer,count,onNext) {
    const result=node('section','result-panel'); result.setAttribute('aria-label','Round result');
    const copy=node('div'); copy.append(node('p','eyebrow',status==='won'?'EXPERIMENT COMPLETE':'AN ELEMENT TO REMEMBER'),node('h2','',`${answer.name} · ${answer.symbol}`),node('p','',status==='won'?`Found in ${count} ${count===1?'attempt':'attempts'}. Ready for another?`:`The answer was ${answer.name}, atomic number ${answer.atomicNumber}.`));
    result.append(copy,button('Next random element ↗','primary-button',onNext));area.append(result);
  }
  function renderClassic() {
    $('#round-panel').classList.remove('recall-sidebar');
    const round=session.classic, answer=element(round.answer), status=game.getStatus(round);
    renderSidebar(round.guesses.length,status);
    const area=$('#play-area'); area.replaceChildren();
    area.append(node('h1','','Find the missing element.'),node('p','intro','Make a guess. Read the clues. Find one of 118 elements in eight attempts.'));
    const form=node('form');form.noValidate=true;form.autocomplete='off';
    const label=node('label','input-label','Your element');label.htmlFor='classic-input';form.append(label);
    const row=node('div','guess-row'), wrap=node('div','autocomplete'), inputWrap=node('div','input-wrap');
    const input=node('input');input.id='classic-input';input.placeholder='Start with a name or symbol…';input.value=classicDraft;input.spellcheck=false;input.autocomplete='off';input.disabled=status!=='playing';
    input.addEventListener('input',()=>{classicDraft=input.value;});bindAutocomplete(input);
    const clear=button('×','clear-input',()=>{input.value='';classicDraft='';closeSuggestions();input.focus();});clear.setAttribute('aria-label','Clear element input');clear.disabled=status!=='playing';
    inputWrap.append(input,clear);wrap.append(inputWrap);
    const submit=node('button','primary-button','Guess →');submit.type='submit';submit.disabled=status!=='playing';
    const hint=button(hintVisible?'Hide hint':'Hint ↗','secondary-button',()=>{classicDraft=input.value;hintVisible=!hintVisible;if(hintVisible) session.classic=game.useHint(session.classic);save();renderClassic();$('#classic-input')?.focus();});
    hint.setAttribute('aria-expanded',String(hintVisible));hint.setAttribute('aria-controls','classic-hint');row.append(wrap,submit,hint);form.append(row);
    if(hintVisible) { const hintText=node('p','hint-text',answer.hints[round.hintIndex]);hintText.id='classic-hint';form.append(hintText); }
    form.addEventListener('submit',event=>{
      event.preventDefault();if(status!=='playing')return;
      const guessed=game.findElement(input.value,data);
      if(!guessed) { announce(input.value.trim()?'That is not an element. Try a name or chemical symbol.':'Enter an element first.',true);input.focus();return; }
      const result=game.submitGuess(session.classic,guessed.atomicNumber,data);
      if(result.error) { announce(result.error==='duplicate'?'You have already guessed that element.':'This round is complete.',true);input.focus();return; }
      session.classic=result.round;classicDraft='';save();renderClassic();
      const feedback=game.evaluateGuess(guessed,answer);
      const letterSummary=feedback.letters.map((value,i)=>`${guessed.symbol[i]}: ${value==='correct'?'correct position':value==='present'?'different position':'absent'}`).join('; ');
      const now=game.getStatus(session.classic);
      announce(now==='won'?`Correct! ${answer.name} in ${session.classic.guesses.length} attempts.`:now==='lost'?`Round complete. The element was ${answer.name}.`:`${guessed.name}. Answer has a ${feedback.direction} atomic number. ${letterSummary}. ${feedback.familyMatch?'Family matches.':'Family does not match.'}`);
      if(now==='playing')$('#classic-input').focus();else $('.result-panel button').focus();
    });
    area.append(form);
    const boardTop=node('div','board-top');boardTop.append(node('span','','YOUR EXPERIMENTS'),node('span','',`${round.guesses.length} / 8`));area.append(boardTop);
    const board=node('div','classic-board');board.setAttribute('aria-label','Eight guess slots');
    for(let i=0;i<8;i++) {
      const card=node('div','element-card');
      if(i<round.guesses.length) {
        const guess=element(round.guesses[i]),feedback=game.evaluateGuess(guess,answer);
        if(feedback.direction==='equal')card.classList.add('is-answer');
        const top=node('div','card-top');top.append(node('span','',String(guess.atomicNumber)));
        const arrow=node('span','card-direction',feedback.direction==='equal'?'✓':feedback.direction==='higher'?'↑':'↓');arrow.setAttribute('aria-label',feedback.direction==='equal'?'Correct element':`Answer has a ${feedback.direction} atomic number`);top.append(arrow);
        const symbol=node('div','chemical-symbol');[...guess.symbol].forEach((letter,index)=>{const span=node('span',feedback.letters[index],letter);span.setAttribute('aria-label',`${letter}, ${feedback.letters[index]}`);symbol.append(span);});
        const family=node('div',`element-family${feedback.familyMatch?' match':''}`,guess.family);if(feedback.familyMatch)family.setAttribute('aria-label',`${guess.family}, family matches`);
        card.append(top,symbol,node('div','element-name',guess.name),family);
      } else { card.classList.add('empty');if(i===round.guesses.length&&status==='playing')card.classList.add('next');card.append(node('span','slot-number',String(i+1).padStart(2,'0')),node('span','slot-caption',i===round.guesses.length&&status==='playing'?'YOUR NEXT GUESS':'UNEXPLORED')); }
      board.append(card);
    }
    area.append(board);
    if(status!=='playing')renderResult(area,status,answer,round.guesses.length,()=>{session.classic=game.newRound(data,round.answer);hintVisible=false;classicDraft='';announce('A new element. A fresh experiment.');save();renderClassic();$('#classic-input').focus();});
    closeSuggestions();
  }
  function renderRecallSidebar(round,progress) {
    const target=element(round.answer),aside=$('#round-panel');aside.replaceChildren();aside.classList.add('recall-sidebar');
    aside.append(node('p','eyebrow','THE ELEMENT, WITHOUT ITS NAME'));
    const tile=node('section','periodic-tile');tile.setAttribute('aria-label','Mystery element periodic-table tile');
    const atomicNumber=node('div','periodic-number');atomicNumber.append(node('span','periodic-label','ATOMIC NUMBER'),node('strong','property-number',String(target.atomicNumber)));
    const symbol=node('div','periodic-symbol',progress.symbolSolved||progress.status!=='playing'?target.symbol:'?');
    symbol.setAttribute('aria-label',progress.symbolSolved||progress.status!=='playing'?`Chemical symbol: ${target.symbol}`:'Chemical symbol hidden');
    const name=node('div','periodic-name',progress.nameSolved||progress.status!=='playing'?target.name:'Name hidden');
    name.setAttribute('aria-label',progress.nameSolved||progress.status!=='playing'?`Element name: ${target.name}`:'Element name hidden');
    const weight=node('div','periodic-weight');weight.append(node('span','periodic-label',target.atomicMass.kind==='standard-weight'?'STANDARD ATOMIC WEIGHT':target.atomicMass.kind==='isotope-mass-number'?'ISOTOPE MASS NUMBER':'STANDARD WEIGHT'),node('span','periodic-mass',target.atomicMass.display));
    tile.append(atomicNumber,symbol,name,weight);aside.append(tile,node('p','property-family',target.family));
    const properties=node('dl','property-list');
    const phase=target.phase.value==='unknown'?'Unknown':`${target.phase.certainty==='predicted'?'Predicted ':''}${target.phase.value[0].toUpperCase()+target.phase.value.slice(1)}`;
    for(const [label,value,note] of [['Period',target.period],['Group',target.group===null?'Not assigned':target.group],['Physical state',phase,'At 20 °C and 1 atm']]) {
      const item=node('div');item.append(node('dt','',label),node('dd','',String(value)));if(note)item.append(node('dd','property-note',note));properties.append(item);
    }
    aside.append(properties,node('p','recall-clue',target.recallClue));
    const counter=node('section','side-section recall-progress');counter.append(node('p','side-label','SHARED ATTEMPTS'));
    const number=node('div','attempt-count');number.append(node('strong','',String(round.attempts.length).padStart(2,'0')),node('span','','/ 08 attempts'));counter.append(number,node('p','small-copy',progress.status==='playing'?'One submission. Two chances to remember.':progress.status==='won'?'Both pieces of the puzzle, found.':'Keep the clues. Try another element.'));aside.append(counter);
  }
  function renderRecallPane(round,field,target) {
    const progress=recall.getProgress(round,data),word=target[field].toLowerCase(),solved=progress[field==='name'?'nameSolved':'symbolSolved'];
    const pane=node('section','recall-pane');pane.setAttribute('aria-label',`${field==='name'?'Name':'Symbol'} guesses`);
    const heading=node('div','pane-heading');heading.append(node('h2','',field==='name'?'ELEMENT NAME':'SYMBOL'),node('span','',solved?'✓ SOLVED':`${word.length} LETTER${word.length===1?'':'S'}`));pane.append(heading);
    const scroll=node('div','history-scroll');scroll.tabIndex=0;scroll.setAttribute('aria-label',`Scroll ${field} guess history`);
    let previouslySolved=false;
    for(let index=0;index<8;index++) {
      const row=node('div','letter-row');row.append(node('span','row-number',String(index+1).padStart(2,'0')));
      const attempt=round.attempts[index];
      if(attempt&&previouslySolved) row.append(node('span','solved-row','✓ Solved'));
      else {
        const value=attempt?.[field]||'',statuses=attempt?recall.scoreLetters(value,word):[];
        for(let i=0;i<Math.max(word.length,value.length);i++) {
          const tile=node('span',`letter-tile ${statuses[i]||'unentered'}`,value[i]?.toUpperCase()||'');
          tile.setAttribute('aria-label',value[i]?`${value[i].toUpperCase()}, position ${i+1}, ${statuses[i]==='correct'?'correct position':statuses[i]==='present'?'present elsewhere':'absent or excess'}`:`Position ${i+1}, not entered`);row.append(tile);
        }
      }
      if(attempt?.[field]===word)previouslySolved=true;
      scroll.append(row);
    }
    pane.append(scroll);
    const knowledge=recall.getLetterKnowledge(round,field,data),strip=node('div','letter-knowledge');strip.setAttribute('aria-label',`${field} letter knowledge`);
    for(const letter of 'abcdefghijklmnopqrstuvwxyz') {
      const key=node('span',`letter-key ${knowledge[letter]||'unseen'}`,letter.toUpperCase());key.setAttribute('aria-label',`${letter.toUpperCase()}: ${knowledge[letter]||'not guessed'}`);strip.append(key);
    }
    pane.append(strip);return pane;
  }
  function renderRecall() {
    closeSuggestions();
    const round=session.recall,target=element(round.answer),progress=recall.getProgress(round,data),finished=progress.status!=='playing';
    $('#reference-button').hidden=!finished;
    renderRecallSidebar(round,progress);
    const area=$('#play-area');area.replaceChildren();
    area.append(node('h1','','Put a name to the element.'),node('p','intro','The properties are your clues. Recall the name and symbol; each attempt brings the letters into focus.'));
    const form=node('form','recall-inputs');form.noValidate=true;form.autocomplete='off';
    for(const field of ['name','symbol']) {
      const solved=progress[field==='name'?'nameSolved':'symbolSolved'],wrap=node('div');
      const label=node('label','input-label',field==='name'?'Element name':'Chemical symbol');label.htmlFor=`recall-${field}`;
      if(solved)label.append(node('span','solved-badge','✓ SOLVED'));
      const input=node('input');input.id=`recall-${field}`;input.name=field;input.autocomplete='off';input.spellcheck=false;input.setAttribute('autocorrect','off');input.setAttribute('autocapitalize','off');input.placeholder=field==='name'?'Start with an element name…':'e.g. Xx';
      input.disabled=solved||finished;input.value=solved?target[field]:recallDraft[field];
      if(field==='symbol')input.placeholder='Symbol…';
      const error=node('p','input-error');error.id=`recall-${field}-error`;error.hidden=true;
      input.setAttribute('aria-describedby',error.id);
      input.addEventListener('input',()=>{recallDraft[field]=input.value;error.hidden=true;input.removeAttribute('aria-invalid');announce('');});
      wrap.append(label);
      if(field==='name') {const autocomplete=node('div','autocomplete');autocomplete.append(input);wrap.append(autocomplete);bindAutocomplete(input);}
      else wrap.append(input);
      wrap.append(error);form.append(wrap);
    }
    const submit=node('button','primary-button','Check answers →');submit.type='submit';submit.disabled=finished;form.append(submit);area.append(form);
    if(aliasNote)area.append(node('p','alias-note',aliasNote));
    form.addEventListener('submit',event=>{
      event.preventDefault();closeSuggestions();
      const input={name:$('#recall-name').value,symbol:$('#recall-symbol').value},result=recall.submitAnswers(session.recall,input,data);
      if(result.error) {
        const messages={'invalid-name':'Enter an existing element name. Check the spelling.', 'invalid-symbol':'Enter an existing chemical symbol.',duplicate:'You have already tried that pair of answers.',finished:'This round is complete.'};
        const field=result.error==='invalid-symbol'?'symbol':progress.nameSolved?'symbol':'name';
        if(result.error==='invalid-name'||result.error==='invalid-symbol') {
          const input=$(`#recall-${field}`),error=$(`#recall-${field}-error`);
          input.setAttribute('aria-invalid','true');error.textContent=messages[result.error];error.hidden=false;
        }
        announce(messages[result.error],true);$(`#recall-${field}`).focus();return;
      }
      aliasNote='';const raw=input.name.trim().toLowerCase();if(!progress.nameSolved&&['aluminium','caesium'].includes(raw))aliasNote=`${raw[0].toUpperCase()+raw.slice(1)} accepted as ${recall.normalizeName(raw)[0].toUpperCase()+recall.normalizeName(raw).slice(1)}.`;
      session.recall=result.round;recallDraft={name:'',symbol:''};save();renderRecall();
      const now=recall.getProgress(session.recall,data),last=session.recall.attempts.at(-1);
      if(now.status==='won')announce(`Both correct! ${target.name}, ${target.symbol}.`);
      else if(now.status==='lost')announce(`Round complete. The element was ${target.name}, symbol ${target.symbol}.`);
      else {
        const summaries=['name','symbol'].map(field=>{
          if(now[field==='name'?'nameSolved':'symbolSolved'])return `${field==='name'?'Name':'Symbol'} solved.`;
          const marks=recall.scoreLetters(last[field],target[field].toLowerCase());
          return `${field==='name'?'Name':'Symbol'}: ${marks.filter(m=>m==='correct').length} correct positions, ${marks.filter(m=>m==='present').length} misplaced letters.`;
        });announce(summaries.join(' '));
      }
      if(now.status!=='playing')$('.result-panel button').focus();else $('#'+(now.nameSolved?'recall-symbol':'recall-name')).focus();
    });
    const boards=node('div','boards');boards.append(renderRecallPane(round,'name',target),renderRecallPane(round,'symbol',target));area.append(boards);
    const legend=node('div','feedback-legend');
    for(const [status,label] of [['correct','Right place'],['present','Other place'],['absent','Absent / excess']]) {const item=node('span');item.append(node('span',`legend-dot ${status}`),document.createTextNode(label));legend.append(item);}area.append(legend);
    if(finished)renderResult(area,progress.status,target,round.attempts.length,()=>{session.recall=recall.newRound(data,round.answer);recallDraft={name:'',symbol:''};aliasNote='';save();renderRecall();announce('A new element to identify.');$('#recall-name').focus();});
  }
  function renderApp() {
    document.querySelectorAll('[data-mode]').forEach(b=>{if(b.dataset.mode===session.activeMode)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
    $('#mode-label').textContent=session.activeMode==='classic'?'01 / CLASSIC PRACTICE':'02 / ELEMENT RECALL';
    $('#reference-button').hidden=false;
    if(session.activeMode==='classic')renderClassic();else renderRecall();
  }
  document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{
    closeSuggestions();session.activeMode=b.dataset.mode;
    if(!session[session.activeMode])session[session.activeMode]=session.activeMode==='classic'?game.newRound(data):recall.newRound(data);
    announce('');save();renderApp();
  }));
  function closeSuggestions() {
    $('#suggestion-list')?.remove();suggestions=[];suggestionIndex=-1;
    if(suggestionInput){suggestionInput.setAttribute('aria-expanded','false');suggestionInput.removeAttribute('aria-activedescendant');suggestionInput=null;}
  }
  function bindAutocomplete(input) {
    input.setAttribute('role','combobox');input.setAttribute('aria-autocomplete','list');input.setAttribute('aria-controls','suggestion-list');input.setAttribute('aria-expanded','false');
    input.addEventListener('input',()=>updateSuggestions(input));
    input.addEventListener('keydown',event=>{
      if(event.key==='Escape'){closeSuggestions();return;}
      if(!suggestions.length)return;
      if(event.key==='ArrowDown'||event.key==='ArrowUp') {
        event.preventDefault();suggestionIndex=game.moveSuggestion(suggestionIndex,event.key==='ArrowDown'?1:-1,suggestions.length);updateSuggestionHighlight();
      } else if(event.key==='Enter'&&suggestionIndex>=0){event.preventDefault();selectSuggestion(suggestions[suggestionIndex]);}
    });
    input.addEventListener('focusout',event=>{if(!input.closest('.autocomplete').contains(event.relatedTarget))closeSuggestions();});
  }
  function selectSuggestion(value) {const input=suggestionInput;input.value=value.name;input.dispatchEvent(new Event('input',{bubbles:true}));closeSuggestions();input.focus();}
  function updateSuggestionHighlight() {
    document.querySelectorAll('#suggestion-list button').forEach((b,i)=>{b.classList.toggle('active',i===suggestionIndex);b.setAttribute('aria-selected',String(i===suggestionIndex));});
    const current=$(`#suggestion-${suggestionIndex}`);if(current){suggestionInput.setAttribute('aria-activedescendant',current.id);current.scrollIntoView({block:'nearest'});}
  }
  function updateSuggestions(input) {
    closeSuggestions();const classic=session.activeMode==='classic';suggestions=game.searchElements(input.value,data,classic);if(!suggestions.length)return;
    suggestionInput=input;
    const list=node('ul','suggestions');list.id='suggestion-list';list.setAttribute('role','listbox');list.setAttribute('aria-label','Element suggestions');
    suggestions.forEach((e,i)=>{const item=node('li');item.setAttribute('role','presentation');const b=button('','',()=>selectSuggestion(e));b.id=`suggestion-${i}`;b.tabIndex=-1;b.setAttribute('role','option');b.setAttribute('aria-selected','false');b.append(node('span','',e.name));if(classic)b.append(node('span','suggestion-symbol',e.symbol));item.append(b);list.append(item);});
    input.closest('.autocomplete').append(list);input.setAttribute('aria-expanded','true');
  }
  document.addEventListener('click',event=>{if(!event.target.closest('.autocomplete'))closeSuggestions();});
  function renderReference() {
    const value=$('#reference-search').value.trim().toLowerCase();
    const table=$('#reference-table');table.querySelector('thead')?.remove();table.querySelector('tbody')?.remove();
    const head=node('thead'),groups=node('tr');groups.append(node('td','table-corner','Period / Group'));
    for(let group=1;group<=18;group++){const heading=node('th','',String(group));heading.scope='col';groups.append(heading);}
    head.append(groups);table.append(head);
    const positions=new Map(data.map(e=>{const p=game.getTablePosition(e);return [`${p.row},${p.column}`,e];}));
    const body=node('tbody');let matches=0;
    for(let period=1;period<=9;period++) {
      if(period===8){const gap=node('tr','series-gap'),cell=node('td');gap.setAttribute('aria-hidden','true');cell.colSpan=19;gap.append(cell);body.append(gap);}
      const row=node('tr');
      const label=node('th','period-label',period===8?'Lanthanides':period===9?'Actinides':String(period));label.scope='row';
      if(period>7)label.colSpan=3;row.append(label);
      for(let group=period>7?3:1;group<=18;group++) {
        const e=positions.get(`${period},${group}`),cell=node('td');
        if(e) {
          const match=`${e.atomicNumber} ${e.name} ${e.symbol} ${e.family}`.toLowerCase().includes(value);
          if(match)matches++;
          cell.className=`reference-element${value?(match?' search-match':' search-muted'):''}`;
          cell.dataset.family=e.family;cell.dataset.atomicNumber=e.atomicNumber;
          cell.title=`${e.name} (${e.symbol}) · ${e.family} · Atomic mass: ${e.atomicMass.display}`;
          cell.append(node('span','reference-number',String(e.atomicNumber)),node('strong','reference-symbol',e.symbol),node('span','reference-name',e.name),node('span','sr-only',`${e.family}. Atomic mass: ${e.atomicMass.display}`));
        } else if(group===3&&(period===6||period===7)) {
          cell.className='series-marker';cell.append(node('span','',period===6?'57–71':'89–103'),node('span','',period===6?'Lanthanides ↓':'Actinides ↓'));
        } else cell.className='table-gap';
        row.append(cell);
      }
      body.append(row);
    }
    table.append(body);
    const legend=$('#reference-legend');legend.replaceChildren();
    for(const family of new Set(data.map(e=>e.family))){const item=node('span','',family);item.dataset.family=family;legend.append(item);}
    $('#reference-count').textContent=value?`${matches} of 118 elements match`:'118 elements';
    if(value)table.querySelector('.search-match')?.scrollIntoView({block:'nearest',inline:'center'});
    else $('.reference-scroll').scrollTo(0,0);
  }
  $('#reference-search').addEventListener('input',renderReference);
  $('#reference-button').addEventListener('click',()=>{$('#reference-search').value='';$('#reference-dialog').showModal();renderReference();});
  $('#help-button').addEventListener('click',()=>{
    const copy=$('#help-copy');copy.replaceChildren();
    if(session.activeMode==='recall') {
      copy.append(node('p','','Identify the hidden element from its characteristics. Solve both the name and symbol in eight shared submissions.'));
      const list=node('ol','help-list');for(const text of ['Enter an existing element name and an existing chemical symbol. They may belong to different elements. Name suggestions show element names only; use Up/Down and Enter to select before submitting. Enter the symbol yourself. Invalid entries show a message and use no attempt. Case and surrounding spaces do not matter.','Green means a letter is in the right place; yellow means it belongs elsewhere; grey means it is absent or you used it too often. Exact matches are scored before misplaced letters.','Name and symbol clues are independent. A correct field stays solved while you work on the other. One submitted pair costs one attempt.','Shorter and longer element names still get letter clues. Missing positions are blank. A shorter answer is not solved just because its letters are all green.','Aluminium and Caesium are accepted and displayed in their canonical spellings, Aluminum and Cesium. Empty/invalid entries and repeated pairs use no attempts.','Win by solving both fields, including on attempt eight. Review the answer afterwards or start the next random element. Changing modes preserves both rounds.'])list.append(node('li','',text));copy.append(list);$('#help-dialog').showModal();return;
    }
    copy.append(node('p','','Find the hidden element in eight guesses. Each round is random; there is no daily limit.'));
    const list=node('ol','help-list');for(const text of ['Type an element name or symbol. Pick a suggestion, then press Guess. Aluminium and Caesium are accepted too.','An up arrow means the answer has a higher atomic number; a down arrow means lower.','Green symbol letters are in the right position. Yellow letters are in the symbol at another position. Neutral letters are absent. A green family means the family matches.','Hints reveal one fixed clue and do not cost an attempt. Invalid or repeated elements do not use attempts.','After a win or eight guesses, review the answer and start another random round.'])list.append(node('li','',text));copy.append(list);$('#help-dialog').showModal();
  });
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
  if(restored.warning)showSaveNotice(restored.warning);
  renderApp();save();
})();
