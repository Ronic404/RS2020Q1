import './sass/main.scss';

import pageSwitcher from './js/pageSwitcher.js';
import hintsSwitcher from './js/hintsSwitcher.js';
import renderResults from './js/render/renderResults.js';

window.addEventListener('load', () => {
  pageSwitcher();
  hintsSwitcher();
  renderResults();
});
