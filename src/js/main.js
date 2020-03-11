import { hello } from './hello.js';

/** @type {HTMLInputElement} */
const inputPrenomE1 = document.querySelector('.prenom');

/** @type {HTMLParagraphElement} */
const outputE1 = document.querySelector('.output');

inputPrenomE1.addEventListener('input', () => {
  outputE1.innerText = hello(inputPrenomE1.value);
});
