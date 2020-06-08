import { PUZZLE_PAGE } from './variables.js';

export default function renderPuzzle(data) {
  window.console.log(data);

  for (let i = 0; i < 10; i += 1) {
    const UL = document.createElement('ul');
    UL.className = `phrase phrase-${i}`;
    PUZZLE_PAGE.append(UL);

    for (let j = 0; j < data[i].textExample.split(' ').length; j += 1) {
      const LI = document.createElement('li');
      LI.innerHTML = data[i].textExample.split(' ')[j];
      UL.append(LI);
    }
  }
}
