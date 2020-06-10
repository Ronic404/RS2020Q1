import { TEXT_TRANSLATE, PUZZLE_PAGE } from './variables.js';

export default function audio(data) {
  const LAST_AUDIO = PUZZLE_PAGE.lastChild;
  const AUDIO_NUMBER = LAST_PHRASE.className.split('-')[1];

  TEXT_TRANSLATE.textContent = data[AUDIO_NUMBER].textExampleTranslate;
}
