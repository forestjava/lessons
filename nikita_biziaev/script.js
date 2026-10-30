// script.js
let a = 100;
let b = a + 200;

function doSomething() {
  alert('i am still pressed from js code!');
  
}

function hide() {
  const el = document.getElementById('our-great-label');

  el.style.position = 'absolute';
  el.style.margin = '0';

  el.style.left = Math.random() * Math.max(0, window.innerWidth - el.offsetWidth) + 'px';
  el.style.top = Math.random() * Math.max(0, window.innerHeight - el.offsetHeight) + 'px';
}

async function loadFromServer() {
  const response = await fetch('http://localhost:3000');
  const catalog = await response.json();

  for (let i = 0; i < catalog.length; i++) {
    const figure = document.createElement('figure');
    figure.textContent = catalog[i].name + '\n' + catalog[i].description + '\n' + catalog[i].price;
    document.body.appendChild(figure);
  }
}
