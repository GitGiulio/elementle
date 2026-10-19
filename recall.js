const ElementleRecall = (() => {
  function normalizeName(input) {
    const value=input.trim().toLowerCase();
    return value==='aluminium'?'aluminum':value==='caesium'?'cesium':value;
  }
  function scoreLetters(guess,answer) {
    const result=[...guess].map(()=> 'absent'),remaining={};
    [...answer].forEach((letter,i)=>{
      if(guess[i]===letter) result[i]='correct';
      else remaining[letter]=(remaining[letter]||0)+1;
    });
    [...guess].forEach((letter,i)=>{
      if(result[i]!=='correct' && remaining[letter]>0) {result[i]='present';remaining[letter]--;}
    });
    return result;
  }
  function newRound(elements,previousAnswer=null,random=Math.random) {
    const candidates=elements.filter(e=>e.atomicNumber!==previousAnswer);
    return {answer:candidates[Math.floor(random()*candidates.length)].atomicNumber,attempts:[]};
  }
  function getProgress(round,elements) {
    const target=elements.find(e=>e.atomicNumber===round.answer);
    const nameSolved=round.attempts.some(a=>a.name===target.name.toLowerCase());
    const symbolSolved=round.attempts.some(a=>a.symbol===target.symbol.toLowerCase());
    return {nameSolved,symbolSolved,status:nameSolved&&symbolSolved?'won':round.attempts.length>=8?'lost':'playing'};
  }
  function submitAnswers(round,input,elements) {
    const progress=getProgress(round,elements);
    if(progress.status!=='playing')return {round,error:'finished'};
    const target=elements.find(e=>e.atomicNumber===round.answer);
    const name=progress.nameSolved?target.name.toLowerCase():normalizeName(input.name);
    const symbol=progress.symbolSolved?target.symbol.toLowerCase():input.symbol.trim().toLowerCase();
    if(!elements.some(e=>e.name.toLowerCase()===name))return {round,error:'invalid-name'};
    if(!elements.some(e=>e.symbol.toLowerCase()===symbol))return {round,error:'invalid-symbol'};
    if(round.attempts.some(a=>a.name===name&&a.symbol===symbol))return {round,error:'duplicate'};
    return {round:{...round,attempts:[...round.attempts,{name,symbol}]},error:null};
  }
  function getLetterKnowledge(round,field,elements) {
    const answer=elements.find(e=>e.atomicNumber===round.answer)[field].toLowerCase();
    const rank={absent:1,present:2,correct:3},knowledge={};
    for(const attempt of round.attempts) {
      const statuses=scoreLetters(attempt[field],answer);
      [...attempt[field]].forEach((letter,i)=>{
        if((rank[knowledge[letter]]||0)<rank[statuses[i]])knowledge[letter]=statuses[i];
      });
    }
    return knowledge;
  }
  return {normalizeName,scoreLetters,newRound,getProgress,submitAnswers,getLetterKnowledge};
})();
if(typeof module!=='undefined')module.exports=ElementleRecall;
