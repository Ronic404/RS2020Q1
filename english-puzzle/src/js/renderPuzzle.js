import { PUZZLE_PAGE } from './variables.js';
// import getWords from './getWords.js';


// const REFRESH_BUTTON = document.querySelector('#refresh-button');

export default function renderPuzzle(data) {
  for (let i = 1; i <= 10; i += 1) {
    const UL = document.createElement('ul');
    UL.className = `phrase phrase-${i}`;
    PUZZLE_PAGE.append(UL);

    for (let j = 1; j <= 10; j += 1) {
      const LI = document.createElement('li');
      LI.textContent = j;
      UL.append(LI);
    }
  }

  console.log(data);
}

// REFRESH_BUTTON.addEventListener('click', () => {
//   // const SELECTED_ROUND = document.querySelector('#rounds').value;
//   // const SELECTED_GROUP = document.querySelector('#groups').value;

//   getWords(SELECTED_ROUND, SELECTED_GROUP);
// });
