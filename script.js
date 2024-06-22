let text = document.getElementById('text');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
let bg4 = document.getElementById('bg4');


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 1.0 + 'px';
  bg2.style.left = value * 1.5 + 'px';
  bg3.style.left = value * -1.5 + 'px';
  bg4.style.left = value * 1.5 + 'px';
 
});