import {
  RSSCHOOL_API_URL, PUZZLE_PAGE, REFRESH_BUTTON, CURRENT_STRING, CONTINUE_BUTTON, CHECK_BUTTON,
  DO_NOT_KNOW_BUTTON, PICTURE_TITLE,
} from './variables.js';

import renderPuzzle from './renderPuzzle.js';
import getPicture from './getPicture.js';
import getBackendStat, { setBackendStat } from './getBackendStat.js';


export default function getWords() {
  const SELECTED_ROUND = Math.ceil((JSON.parse(localStorage.getItem('player-level'))[0]) / 2) - 1;
  const SELECTED_GROUP = JSON.parse(localStorage.getItem('player-level'))[1] - 1;

  fetch(`${RSSCHOOL_API_URL}words?page=${SELECTED_ROUND}&group=${SELECTED_GROUP}`)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('Words', JSON.stringify(data));

      renderPuzzle(data);
      getPicture();
      getBackendStat();
    });
}

REFRESH_BUTTON.addEventListener('click', () => {
  PUZZLE_PAGE.innerHTML = '';
  const SELECTED_ROUND = document.querySelector('#rounds').value;
  const SELECTED_GROUP = document.querySelector('#groups').value;

  localStorage.setItem('player-level', JSON.stringify([SELECTED_ROUND, SELECTED_GROUP]));
  CURRENT_STRING.innerHTML = '';

  CONTINUE_BUTTON.classList.add('hide');
  CHECK_BUTTON.classList.add('hide');
  DO_NOT_KNOW_BUTTON.classList.remove('hide');
  PICTURE_TITLE.classList.add('hide');

  getWords();
  setBackendStat();
});
