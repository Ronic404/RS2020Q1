import {
  START_SCREEN, LOGIN_PAGE, SIGN_UP_BUTTON, LOG_IN_BUTTON, LOG_OUT_BUTTON,
} from './variables.js';

export default function showFirstPage() {
  if (localStorage.getItem('token')) {
    START_SCREEN.classList.remove('hide');

    SIGN_UP_BUTTON.classList.add('hide');
    LOG_IN_BUTTON.classList.add('hide');
    LOG_OUT_BUTTON.classList.remove('hide');
  } else {
    LOGIN_PAGE.classList.remove('hide');

    SIGN_UP_BUTTON.classList.remove('hide');
    LOG_IN_BUTTON.classList.remove('hide');
    LOG_OUT_BUTTON.classList.add('hide');
  }
}
