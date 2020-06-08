import { RSSCHOOL_API_URL } from './variables.js';
import renderPuzzle from './renderPuzzle.js';

const REFRESH_BUTTON = document.querySelector('#refresh-button');

export default function getWords() {
  const SELECTED_ROUND = document.querySelector('#rounds').value;
  const SELECTED_GROUP = document.querySelector('#groups').value;

  fetch(`${RSSCHOOL_API_URL}words?page=${SELECTED_ROUND}&group=${SELECTED_GROUP}`)
    .then((response) => response.json())
    .then((data) => {
      // window.console.log(data);
      renderPuzzle(data);
    });
}

REFRESH_BUTTON.addEventListener('click', () => {
  getWords();
});
