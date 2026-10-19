const ElementleGame = (() => {
  function findElement(input, elements) {
    const value=input.trim().toLowerCase();
    const canonical=value==='aluminium'?'aluminum':value==='caesium'?'cesium':value;
    return elements.find(e=>e.name.toLowerCase()===canonical || e.symbol.toLowerCase()===canonical) || null;
  }
  function searchElements(input,elements,includeSymbols=true) {
    const value=input.trim().toLowerCase();
    if(!value) return [];
    return elements.filter(e=>e.name.toLowerCase().startsWith(value)||(includeSymbols&&e.symbol.toLowerCase().startsWith(value)))
      .sort((a,b)=>a.name.localeCompare(b.name,'en'));
  }
  function evaluateGuess(guess,answer) {
    const target=answer.symbol.toLowerCase();
    return {
      direction:guess.atomicNumber<answer.atomicNumber?'higher':guess.atomicNumber>answer.atomicNumber?'lower':'equal',
      letters:[...guess.symbol.toLowerCase()].map((letter,i)=>letter===target[i]?'correct':target.includes(letter)?'present':'absent'),
      familyMatch:guess.family===answer.family
    };
  }
  function moveSuggestion(index,direction,count) {
    if(count===0)return -1;
    if(index<0)return direction>0?0:count-1;
    return (index+direction+count)%count;
  }
  function getTablePosition(element) {
    const number=element.atomicNumber;
    if(number>=57&&number<=71)return {row:8,column:number-54};
    if(number>=89&&number<=103)return {row:9,column:number-86};
    return {row:element.period,column:element.group};
  }
  function newRound(elements,previousAnswer=null,random=Math.random) {
    const candidates=elements.filter(e=>e.atomicNumber!==previousAnswer);
    return {answer:candidates[Math.floor(random()*candidates.length)].atomicNumber,
      guesses:[],hintIndex:Math.floor(random()*3),hintUsed:false};
  }
  function getStatus(round) {
    if(round.guesses.at(-1)===round.answer) return 'won';
    return round.guesses.length>=8?'lost':'playing';
  }
  function submitGuess(round,guessNumber,elements) {
    if(getStatus(round)!=='playing') return {round,error:'finished'};
    if(!elements.some(e=>e.atomicNumber===guessNumber)) return {round,error:'invalid'};
    if(round.guesses.includes(guessNumber)) return {round,error:'duplicate'};
    return {round:{...round,guesses:[...round.guesses,guessNumber]},error:null};
  }
  function useHint(round) { return {...round,hintUsed:true}; }
  return {findElement,searchElements,evaluateGuess,moveSuggestion,getTablePosition,newRound,getStatus,submitGuess,useHint};
})();
if(typeof module!=='undefined') module.exports=ElementleGame;
