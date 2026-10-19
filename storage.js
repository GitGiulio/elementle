const ElementleStorage = (() => {
  const classic=typeof module!=='undefined'?require('./game.js'):ElementleGame;
  const recall=typeof module!=='undefined'?require('./recall.js'):ElementleRecall;
  const key='elementle-practice.v1';
  const unavailable='Progress cannot be saved in this browser session. You can keep playing.';
  const repaired='Some saved progress was invalid. The affected round has been reset.';
  const record=value=>value!==null && typeof value==='object' && !Array.isArray(value);
  function validClassic(round,elements) {
    if(!record(round)||!elements.some(e=>e.atomicNumber===round.answer)||!Array.isArray(round.guesses)||
      round.guesses.length>8||!Number.isInteger(round.hintIndex)||round.hintIndex<0||round.hintIndex>2||typeof round.hintUsed!=='boolean')return false;
    if(new Set(round.guesses).size!==round.guesses.length||round.guesses.some(n=>!elements.some(e=>e.atomicNumber===n)))return false;
    const wonAt=round.guesses.indexOf(round.answer);
    return wonAt<0 || wonAt===round.guesses.length-1;
  }
  function validRecall(round,elements) {
    if(!record(round)||!elements.some(e=>e.atomicNumber===round.answer)||!Array.isArray(round.attempts)||round.attempts.length>8)return false;
    const target=elements.find(e=>e.atomicNumber===round.answer);
    const maxName=Math.max(9,...elements.map(e=>e.name.length));
    let replay={answer:round.answer,attempts:[]};
    for(const attempt of round.attempts) {
      if(!record(attempt)||typeof attempt.name!=='string'||typeof attempt.symbol!=='string')return false;
      // Preserve history accepted before dictionary-only entry was introduced.
      // New submissions still go through the stricter Recall rule API.
      if(!/^[a-z]+$/.test(attempt.name)||attempt.name.length>maxName||recall.normalizeName(attempt.name)!==attempt.name||!/^[a-z]{1,2}$/.test(attempt.symbol))return false;
      const progress=recall.getProgress(replay,elements);
      if(progress.status!=='playing'||progress.nameSolved&&attempt.name!==target.name.toLowerCase()||progress.symbolSolved&&attempt.symbol!==target.symbol.toLowerCase())return false;
      if(replay.attempts.some(a=>a.name===attempt.name&&a.symbol===attempt.symbol))return false;
      replay={...replay,attempts:[...replay.attempts,attempt]};
    }
    return true;
  }
  function loadSession(getStorage,elements) {
    let raw;
    try {raw=getStorage().getItem(key);}catch{return {session:null,warning:unavailable};}
    if(raw===null)return {session:null,warning:null};
    try {
      const envelope=JSON.parse(raw);
      if(!record(envelope)||envelope.version!==1||!record(envelope.session))return {session:null,warning:repaired};
      const saved=envelope.session;
      let warning=null;
      const activeMode=['classic','recall'].includes(saved.activeMode)?saved.activeMode:'classic';
      if(activeMode!==saved.activeMode)warning=repaired;
      const session={activeMode,classic:null,recall:null};
      for(const [mode,validate] of [['classic',validClassic],['recall',validRecall]]) {
        if(saved[mode]===null)continue;
        if(validate(saved[mode],elements))session[mode]=saved[mode];else warning=repaired;
      }
      return {session,warning};
    }catch{return {session:null,warning:repaired};}
  }
  function saveSession(getStorage,session) {
    try {getStorage().setItem(key,JSON.stringify({version:1,session}));return {saved:true,warning:null};}
    catch{return {saved:false,warning:unavailable};}
  }
  return {loadSession,saveSession};
})();
if(typeof module!=='undefined')module.exports=ElementleStorage;
