import {
  PUZZLE_PAGE, RESULT_STRING, CHECK_BUTTON, CONTINUE_BUTTON, DO_NOT_KNOW_BUTTON,
} from './variables.js';

import renderTextTranslate from './renderTextTranslate.js';
import audio from './audio.js';

let PHRASE_ARRAY = '';
let PHRASE_RANDOM_ARRAY = '';
const ALL_PHRASES_ON_THE_PAGE = [];
let NUMBER_STRING = 9;

export default function renderPuzzle(data) {
  window.console.log(data);

  const SELECTED_ROUND = document.querySelector('#rounds').value;
  let increase;

  if ((SELECTED_ROUND - 1) % 2 === 0) {
    increase = 0;
  } else {
    increase = 10;
  }

  for (let i = increase; i < increase + 10; i += 1) {
    const UL = document.createElement('ul');
    UL.className = `phrase phrase-${i}`;
    UL.style.height = `${PUZZLE_PAGE.clientHeight / 10}px`;
    PUZZLE_PAGE.append(UL);

    PHRASE_ARRAY = data[i].textExample.split(' ');
    ALL_PHRASES_ON_THE_PAGE.push(data[i].textExample.split(' '));
    PHRASE_RANDOM_ARRAY = PHRASE_ARRAY.sort(() => 0.5 - Math.random());

    for (let j = 0; j < PHRASE_RANDOM_ARRAY.length; j += 1) {
      const LI = document.createElement('li');
      LI.className = 'puzzle-item';
      LI.innerHTML = PHRASE_RANDOM_ARRAY[j];
      LI.style.height = UL.style.height;
      LI.style.width = `${PUZZLE_PAGE.clientWidth / PHRASE_RANDOM_ARRAY.length}px`;
      UL.append(LI);
    }
  }
}

CHECK_BUTTON.addEventListener('click', () => {
  let result = '';
  RESULT_STRING.querySelectorAll('.puzzle-item').forEach((el) => {
    result += `${el.innerHTML} `;
  });

  if (result.trim() === ALL_PHRASES_ON_THE_PAGE[NUMBER_STRING].join(' ')) {
    RESULT_STRING.style.outline = '3px solid green';
    CONTINUE_BUTTON.classList.remove('hide');
    CHECK_BUTTON.classList.add('hide');
    DO_NOT_KNOW_BUTTON.classList.add('hide');
  } else {
    RESULT_STRING.style.outline = '3px solid red';
    setTimeout(() => { RESULT_STRING.style.outline = 'none'; }, 3000);
  }
});

CONTINUE_BUTTON.addEventListener('click', () => {
  NUMBER_STRING -= 1;
  RESULT_STRING.innerHTML = '';
  RESULT_STRING.style.outline = 'none';
  CONTINUE_BUTTON.classList.add('hide');
  CHECK_BUTTON.classList.remove('hide');
  DO_NOT_KNOW_BUTTON.classList.remove('hide');

  renderTextTranslate();
  audio();
});

DO_NOT_KNOW_BUTTON.addEventListener('click', () => {
  const LAST_PHRASE = PUZZLE_PAGE.lastChild;
  const TEXT_NUMBER = LAST_PHRASE.className.split('-')[1];
  const WORDS = JSON.parse(localStorage.getItem('Words'));
  const RIGHT_TEXT_ARRAY = WORDS[TEXT_NUMBER].textExample.split(' ');

  RESULT_STRING.innerHTML = '';

  for (let i = 0; i < RIGHT_TEXT_ARRAY.length; i += 1) {
    const LI = document.createElement('li');
    LI.className = 'puzzle-item';
    LI.innerHTML = RIGHT_TEXT_ARRAY[i];
    LI.style.width = `${PUZZLE_PAGE.clientWidth / PHRASE_RANDOM_ARRAY.length}px`;
    LI.style.height = LAST_PHRASE.style.height;

    RESULT_STRING.append(LI);
    LAST_PHRASE.remove();
  }
});
