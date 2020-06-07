import './sass/main.scss';

import './js/createUser.js';
import './js/loginUser.js';

import getWords from './js/getWords.js';
import pageSwitcher from './js/pageSwitcher.js';


window.addEventListener('load', () => {
  getWords(3, 3); // Страницы 0-29 по 20 слов; Группы 0-5
  pageSwitcher();
});
