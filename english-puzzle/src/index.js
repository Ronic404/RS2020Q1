import './sass/main.scss';

import hintsSwitcher from './js/hintsSwitcher.js';
import './js/render/renderResults.js';

import pageSwitcher from './js/pageSwitcher.js';


window.addEventListener('load', () => {
  pageSwitcher();
  hintsSwitcher();
});
