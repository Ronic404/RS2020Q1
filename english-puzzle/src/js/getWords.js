import { RSSCHOOL_API_URL, PUZZLE_PAGE, REFRESH_BUTTON } from './variables.js';
import renderPuzzle from './renderPuzzle.js';
import renderTextTranslate from './renderTextTranslate.js';
import audio from './audio.js';

export default function getWords() {
  const SELECTED_ROUND = Math.ceil((JSON.parse(localStorage.getItem('player-level'))[0]) / 2) - 1;
  const SELECTED_GROUP = JSON.parse(localStorage.getItem('player-level'))[1] - 1;

  fetch(`${RSSCHOOL_API_URL}words?page=${SELECTED_ROUND}&group=${SELECTED_GROUP}`)
    .then((response) => response.json())
    .then((data) => {
      renderPuzzle(data);
      renderTextTranslate(data);
      audio(data);
    });
}


REFRESH_BUTTON.addEventListener('click', () => {
  PUZZLE_PAGE.innerHTML = '';
  const SELECTED_ROUND = document.querySelector('#rounds').value;
  const SELECTED_GROUP = document.querySelector('#groups').value;

  localStorage.setItem('player-level', JSON.stringify([SELECTED_ROUND, SELECTED_GROUP]));
  getWords();
});
