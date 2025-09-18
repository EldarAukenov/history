
// script.js — small accessibility & analytics-free enhancements
document.addEventListener('click', function(e){
  // if user ctrl/cmd+click or middle click, let the browser handle it
  // otherwise regular clicks open new tab because links have target _blank already.
}, {passive:true});
