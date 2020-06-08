import { RSSCHOOL_API_URL, PUZZLE_PAGE, REFRESH_BUTTON } from './variables.js';
import renderPuzzle from './renderPuzzle.js';


export default function getWords() {
  const SELECTED_ROUND = document.querySelector('#rounds').value - 1;
  const SELECTED_GROUP = document.querySelector('#groups').value - 1;

  fetch(`${RSSCHOOL_API_URL}words?page=${SELECTED_ROUND}&group=${SELECTED_GROUP}`)
    .then((response) => response.json())
    .then((data) => {
      renderPuzzle(data);
    });
}


REFRESH_BUTTON.addEventListener('click', () => {
  PUZZLE_PAGE.innerHTML = '';
  getWords();
});
