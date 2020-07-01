import { AUDIO_TAG, PLAY_AUDIO_BUTTON } from './variables.js';

const AUDIO_LINK = 'https://raw.githubusercontent.com/ronic404/rslang-data/master/';

export default function audio(link) {
  AUDIO_TAG.src = `${AUDIO_LINK}${link}`;

  PLAY_AUDIO_BUTTON.addEventListener('click', () => {
    AUDIO_TAG.play();
  });
}
