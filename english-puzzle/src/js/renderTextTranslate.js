import { TEXT_TRANSLATE, PUZZLE_PAGE } from './variables.js';

export default function renderTextTranslate(data) {
  const LAST_PHRASE = PUZZLE_PAGE.lastChild;
  const TEXT_NUMBER = LAST_PHRASE.className.split('-')[1];

  TEXT_TRANSLATE.textContent = data[TEXT_NUMBER].textExampleTranslate;
}
