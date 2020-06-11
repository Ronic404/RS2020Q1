import { AUDIO_TAG, PUZZLE_PAGE } from './variables.js';

const AUDIO_LINK = 'https://raw.githubusercontent.com/ronic404/rslang-data/master/';

export default function audio() {
  const LAST_AUDIO = PUZZLE_PAGE.lastChild;
  const AUDIO_NUMBER = LAST_AUDIO.className.split('-')[1];
  const WORDS = JSON.parse(localStorage.getItem('Words'));

  AUDIO_TAG.src = `${AUDIO_LINK}${WORDS[AUDIO_NUMBER].audioExample}`;
}
