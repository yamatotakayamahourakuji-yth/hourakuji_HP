'use strict';
(function () {
  const track=document.getElementById('offerings-track');
  const prev=document.getElementById('offerings-prev');
  const next=document.getElementById('offerings-next');
  if(!track||!prev||!next) return;
  const cards=Array.from(track.querySelectorAll('.item'));
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const maximum=()=>Math.max(0,track.scrollWidth-track.clientWidth);
  const update=()=>{
    prev.disabled=track.scrollLeft<=2;
    next.disabled=track.scrollLeft>=maximum()-2;
  };
  const move=(direction)=>{
    const pos=track.scrollLeft;
    const candidate=direction>0
      ? cards.find(card=>card.offsetLeft>pos+track.offsetLeft+3)
      : cards.slice().reverse().find(card=>card.offsetLeft<pos+track.offsetLeft-3);
    const amount=candidate
      ? candidate.offsetLeft-track.offsetLeft
      : direction>0?maximum():0;
    track.scrollTo({left:Math.max(0,Math.min(maximum(),amount)),behavior:reduceMotion.matches?'instant':'smooth'});
  };
  prev.addEventListener('click',()=>move(-1));
  next.addEventListener('click',()=>move(1));
  track.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  update();
})();
