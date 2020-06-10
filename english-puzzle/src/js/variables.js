const RSSCHOOL_API_URL = 'https://afternoon-falls-25894.herokuapp.com/';

const MAIN_PAGE = document.querySelector('.main-page');
const PUZZLE_PAGE = document.querySelector('.main-page__puzzle');
const START_SCREEN = document.querySelector('.start-screen');
const LOGIN_PAGE = document.querySelector('.login-page');
const REGISTRATION_FORM = document.querySelector('#registration-form');
const AUTHORIZATION_FORM = document.querySelector('#authorization-form');
const RESULT_STRING = document.querySelector('.result-string');
const TEXT_TRANSLATE = document.querySelector('.text-translate');

const START_BUTTON = document.querySelector('.start-screen__button');
const SIGN_UP_BUTTON = document.querySelector('#sign-up-button');
const LOG_IN_BUTTON = document.querySelector('#log-in-button');
const LOG_OUT_BUTTON = document.querySelector('#log-out-button');
const REFRESH_BUTTON = document.querySelector('#refresh-button');

export {
  RSSCHOOL_API_URL, MAIN_PAGE, START_SCREEN, LOGIN_PAGE, REGISTRATION_FORM, AUTHORIZATION_FORM, START_BUTTON,
  SIGN_UP_BUTTON, LOG_IN_BUTTON, LOG_OUT_BUTTON, PUZZLE_PAGE, REFRESH_BUTTON, RESULT_STRING, TEXT_TRANSLATE,
};
