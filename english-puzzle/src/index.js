import './sass/main.scss';

import './js/createUser.js';
import './js/loginUser.js';
import './js/audio.js';
import './js/hintsSwitcher.js';
import './js/render/renderResults.js';


import showFirstPage from './js/showFirstPage.js';
import pageSwitcher from './js/pageSwitcher.js';


window.addEventListener('load', () => {
  showFirstPage();
  pageSwitcher();
});
