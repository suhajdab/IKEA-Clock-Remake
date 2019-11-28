window.onload = function () {
  var clockEl = document.getElementById('clock'),
  date = new Date(),
  ms = date.getMilliseconds(),
  s = date.getSeconds() + ms/1000,
  m = date.getMinutes() * 60 + s,
  h = date.getHours() * 3600 + m;
  
  

  function setAnimationDelay( sel, delay ){
    var el = clockEl.querySelector( sel );
    
    el.style.mozAnimationDelay = '-' + delay + 's';
    el.style.msAnimationDelay = '-' + delay + 's';
    el.style.webkitAnimationDelay = '-' + delay + 's';
    el.style.animationDelay = '-' + delay + 's';
  }

  //setAnimationDelay('.seconds', s);
  setAnimationDelay('.minutes', m);
  setAnimationDelay('.hours', h);
  clockEl.className = 'start';
}
