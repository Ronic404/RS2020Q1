export default function hintsSwitcher() {
  const PUZZLE_PAGE = document.querySelector('.main-page__puzzle');
  const REFRESH_BUTTON = document.querySelector('#refresh-button');
  const BUTTONS_HINT = document.querySelectorAll('.button-hint');
  const TRANSLATE_BUTTON = document.querySelector('#translate-button');
  const AUDIO_BUTTON = document.querySelector('#audio-button');
  const PICTURE_BUTTON = document.querySelector('#picture-button');
  const AUDIO_TAG = document.querySelector('audio');
  const TEXT_TRANSLATE = document.querySelector('.text-translate');

  BUTTONS_HINT.forEach((button) => {
    if (localStorage.getItem('translate-button') === 'true') {
      if (button.getAttribute('id') === 'translate-button') {
        button.classList.add('button-hint_active');
        TEXT_TRANSLATE.classList.add('text-translate_active');
      }
    }

    if (localStorage.getItem('audio-button') === 'true') {
      if (button.getAttribute('id') === 'audio-button') {
        button.classList.add('button-hint_active');
        AUDIO_TAG.setAttribute('autoplay', 'true');
      }
    }

    if (localStorage.getItem('picture-button') === 'true') {
      if (button.getAttribute('id') === 'picture-button') {
        button.classList.add('button-hint_active');
        PUZZLE_PAGE.classList.add('main-page__puzzle_opacity');
      }
    }

    button.addEventListener('click', () => {
      button.classList.toggle('button-hint_active');

      if (!button.classList.contains('button-hint_active')) {
        localStorage.setItem(button.getAttribute('id'), 'false');
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

  PICTURE_BUTTON.addEventListener('click', () => {
    PUZZLE_PAGE.classList.toggle('main-page__puzzle_opacity');
  });

  let rotate = 0;

  REFRESH_BUTTON.addEventListener('click', () => {
    rotate += 360;
    REFRESH_BUTTON.style.transform = `rotate(${rotate}deg)`;

    if (!localStorage.getItem('picture-button')) {
      PUZZLE_PAGE.classList.remove('main-page__puzzle_opacity');
    }
  });
}
