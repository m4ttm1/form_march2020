import '../scss/app.scss';
import 'bootstrap';

/** @type {HTMLInputElement} */
import { hello } from './hello';

/** @type {HTMLInputElement} */
const inputPrenomE1 = document.querySelector<HTMLInputElement>('.prenom');

/** @type {HTMLParagraphElement} */
const outputE1 = document.querySelector<HTMLParagraphElement>('.output');

inputPrenomE1.addEventListener('input', () => {
  outputE1.innerText = hello(inputPrenomE1.value);
});
