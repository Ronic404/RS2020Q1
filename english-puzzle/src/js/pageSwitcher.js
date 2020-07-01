import {
  MAIN_PAGE, START_SCREEN, START_BUTTON, PUZZLE_PAGE,
} from './variables.js';

import getWords from './getset/getWords.js';
import getBackendSettings from './getset/getBackendSettings.js';
import setDefaultSettings from './getset/setDefaultSettings.js';

export default function pageSwitcher() {
  START_BUTTON.addEventListener('click', () => {
    MAIN_PAGE.classList.remove('hide');
    START_SCREEN.classList.add('hide');
    PUZZLE_PAGE.innerHTML = '';

    try {
      setDefaultSettings();
      getBackendSettings();
      console.log('try pageSwitcher');
    } catch {
      setDefaultSettings();
    }

    getWords(...localStorage.getItem('player-level'));
    [document.querySelector('#rounds').value, document.querySelector('#groups').value] = JSON.parse(localStorage.getItem('player-level'));
  });
}
