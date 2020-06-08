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
    PUZZLE_PAGE.append(UL);

    const PHRASE_ARRAY = data[i].textExample.split(' ');
    const PHRASE_RANDOM_ARRAY = PHRASE_ARRAY.sort(() => 0.5 - Math.random());

    for (let j = 0; j < PHRASE_RANDOM_ARRAY.length; j += 1) {
      const LI = document.createElement('li');
      LI.innerHTML = PHRASE_RANDOM_ARRAY[j];
      UL.append(LI);
    }
  }
}
