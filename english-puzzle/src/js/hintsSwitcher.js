import {
  BUTTONS_HINT, TRANSLATE_BUTTON, AUDIO_BUTTON, TEXT_TRANSLATE, AUDIO_TAG, PLAY_AUDIO_BUTTON,
} from './variables.js';

BUTTONS_HINT.forEach((button) => {
  if (localStorage.getItem('translate-button')) {
    if (button.getAttribute('id') === 'translate-button') {
      button.classList.add('button-hint_active');
      TEXT_TRANSLATE.classList.add('text-translate_active');
    }
  }

  if (localStorage.getItem('audio-button')) {
    if (button.getAttribute('id') === 'audio-button') {
      button.classList.add('button-hint_active');
      AUDIO_TAG.setAttribute('autoplay', 'true');
    }
  }

  button.addEventListener('click', () => {
    button.classList.toggle('button-hint_active');

    if (!button.classList.contains('button-hint_active')) {
      localStorage.removeItem(button.getAttribute('id'), 'true');
    } else {
      localStorage.setItem(button.getAttribute('id'), 'true');
    }
  });
});

TRANSLATE_BUTTON.addEventListener('click', () => {
  TEXT_TRANSLATE.classList.toggle('text-translate_active');
});

AUDIO_BUTTON.addEventListener('click', () => {
  AUDIO_TAG.toggleAttribute('autoplay');
});

PLAY_AUDIO_BUTTON.addEventListener('click', () => {
  AUDIO_TAG.play();
});
