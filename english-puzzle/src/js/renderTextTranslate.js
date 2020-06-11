import { TEXT_TRANSLATE, PUZZLE_PAGE } from './variables.js';

export default function renderTextTranslate() {
  const LAST_PHRASE = PUZZLE_PAGE.lastChild;
  const TEXT_NUMBER = LAST_PHRASE.className.split('-')[1];
  const WORDS = JSON.parse(localStorage.getItem('Words'));

  TEXT_TRANSLATE.textContent = WORDS[TEXT_NUMBER].textExampleTranslate;
}
