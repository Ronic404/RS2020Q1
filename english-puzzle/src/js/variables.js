const RSSCHOOL_API_URL = 'https://afternoon-falls-25894.herokuapp.com/';

const MAIN_PAGE = document.querySelector('.main-page');
const PUZZLE_PAGE = document.querySelector('.main-page__puzzle');
const START_SCREEN = document.querySelector('.start-screen');
const RESULT_PAGE = document.querySelector('.result-page');
const CURRENT_STRING = document.querySelector('.current-string');
const TEXT_TRANSLATE = document.querySelector('.text-translate');
const PICTURE_TITLE = document.querySelector('.picture-title');
const RESULT_PICTURE = document.querySelector('.result-page__picture');
const PICTURE_DESCRIPTION = document.querySelector('.result-page__description');
const STATISTICS_PAGE = document.querySelector('.statistics');

const START_BUTTON = document.querySelector('.start-screen__button');
const REFRESH_BUTTON = document.querySelector('#refresh-button');
const BUTTONS_HINT = document.querySelectorAll('.button-hint');
const TRANSLATE_BUTTON = document.querySelector('#translate-button');
const AUDIO_BUTTON = document.querySelector('#audio-button');
const PICTURE_BUTTON = document.querySelector('#picture-button');
const PLAY_AUDIO_BUTTON = document.querySelector('#play-audio');
const CHECK_BUTTON = document.querySelector('#check-button');
const CONTINUE_BUTTON = document.querySelector('#continue-button');
const DO_NOT_KNOW_BUTTON = document.querySelector('#donotknow-button');
const RESULT_CONTINUE_BUTTON = document.querySelector('#result-continue-button');
const RESULT_STAT_BUTTON = document.querySelector('#result-stat-button');

const AUDIO_TAG = document.querySelector('audio');

export {
  RSSCHOOL_API_URL, MAIN_PAGE, START_SCREEN, START_BUTTON, PUZZLE_PAGE, REFRESH_BUTTON, CURRENT_STRING,
  TEXT_TRANSLATE, AUDIO_TAG, BUTTONS_HINT, TRANSLATE_BUTTON, AUDIO_BUTTON, PLAY_AUDIO_BUTTON,
  CHECK_BUTTON, CONTINUE_BUTTON, DO_NOT_KNOW_BUTTON, PICTURE_BUTTON, PICTURE_TITLE, RESULT_PAGE,
  RESULT_CONTINUE_BUTTON, RESULT_PICTURE, PICTURE_DESCRIPTION, RESULT_STAT_BUTTON, STATISTICS_PAGE,
};
