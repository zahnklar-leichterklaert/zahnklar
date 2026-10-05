/* No storage, tracking, prefetching, form interception or navigation interception. */
addEventListener('pageswap',event=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)event.viewTransition?.skipTransition();
});
addEventListener('pagereveal',event=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)event.viewTransition?.skipTransition();
});
addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.desk-menu');
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.open){menu.open=false;menu.querySelector('summary').focus()}});
 document.addEventListener('click',e=>{if(menu?.open&&!menu.contains(e.target))menu.open=false});
});
