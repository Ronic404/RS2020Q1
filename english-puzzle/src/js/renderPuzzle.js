import { PUZZLE_PAGE } from './variables.js';

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

    const PHRASE_ARRAY = data[i].textExample.split(' ');
    const PHRASE_RANDOM_ARRAY = PHRASE_ARRAY.sort(() => 0.5 - Math.random());

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
