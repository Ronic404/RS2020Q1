/* eslint-disable import/no-cycle */
import RSSCHOOL_API_URL from '../variables.js';
import renderPuzzle from '../render/renderPuzzle.js';
import getPicture from './getPicture.js';
import getBackendStat from './getBackendSettings.js';
import renderRoundsHTML from '../render/renderRoundsHTML.js';

// const REFRESH_BUTTON = document.querySelector('#refresh-button');

const NUMBER_OF_WORDS_IN_SENTENCE = 10;
const NUMBER_OF_WORDS_IN_PAGE = 20;

export default function getWords() {
  const SELECTED_ROUND = Math.ceil((JSON.parse(localStorage.getItem('player-level'))[0]) / 2) - 1;
  const SELECTED_GROUP = JSON.parse(localStorage.getItem('player-level'))[1] - 1;

  fetch(`${RSSCHOOL_API_URL}words?page=${SELECTED_ROUND}&group=${SELECTED_GROUP}&wordsPerExampleSentenceLTE=
  ${NUMBER_OF_WORDS_IN_SENTENCE}&wordsPerPage=${NUMBER_OF_WORDS_IN_PAGE}`)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('Words', JSON.stringify(data));

      getTotalNumberOfWords();
      renderPuzzle(data);
      getPicture();
      getBackendStat();
    });
}

export async function getTotalNumberOfWords() {
  const SELECTED_GROUP = JSON.parse(localStorage.getItem('player-level'))[1] - 1;

  fetch(`${RSSCHOOL_API_URL}words/count?group=${SELECTED_GROUP}&wordsPerExampleSentenceLTE=
  ${NUMBER_OF_WORDS_IN_SENTENCE}&wordsPerPage=${NUMBER_OF_WORDS_IN_PAGE}`)
    .then((response) => response.json())
    .then((data) => {
      renderRoundsHTML(data.count);
    });
}

// REFRESH_BUTTON.addEventListener('click', () => {
//   const PUZZLE_PAGE = document.querySelector('.main-page__puzzle');
//   const SELECTED_ROUND = document.querySelector('#rounds').value;
//   const SELECTED_GROUP = document.querySelector('#groups').value;
//   const PICTURE_TITLE = document.querySelector('.picture-title');
//   const CURRENT_STRING = document.querySelector('.current-string');
//   const CHECK_BUTTON = document.querySelector('#check-button');
//   const CONTINUE_BUTTON = document.querySelector('#continue-button');
//   const DO_NOT_KNOW_BUTTON = document.querySelector('#donotknow-button');

//   PUZZLE_PAGE.innerHTML = '';

//   localStorage.setItem('player-level', JSON.stringify([SELECTED_ROUND, SELECTED_GROUP]));
//   CURRENT_STRING.innerHTML = '';

//   CONTINUE_BUTTON.classList.add('hide');
//   CHECK_BUTTON.classList.add('hide');
//   DO_NOT_KNOW_BUTTON.classList.remove('hide');
//   PICTURE_TITLE.classList.add('hide');

//   getWords();
//   setBackendSettings();
// });
