import {
  REGISTRATION_FORM, AUTHORIZATION_FORM, START_SCREEN, LOGIN_PAGE, SIGN_UP_BUTTON, LOG_IN_BUTTON,
  LOG_OUT_BUTTON,
} from './variables.js';

export default function pageSwitcher() {
  SIGN_UP_BUTTON.addEventListener('click', () => {
    START_SCREEN.classList.add('hide');
    LOGIN_PAGE.classList.remove('hide');

    REGISTRATION_FORM.classList.remove('hide');
    AUTHORIZATION_FORM.classList.add('hide');
  });

  LOG_IN_BUTTON.addEventListener('click', () => {
    START_SCREEN.classList.add('hide');
    LOGIN_PAGE.classList.remove('hide');

    REGISTRATION_FORM.classList.add('hide');
    AUTHORIZATION_FORM.classList.remove('hide');
  });

  LOG_OUT_BUTTON.addEventListener('click', () => {
    SIGN_UP_BUTTON.classList.remove('hide');
    LOG_IN_BUTTON.classList.remove('hide');
    LOG_OUT_BUTTON.classList.add('hide');

    START_SCREEN.classList.add('hide');
    LOGIN_PAGE.classList.remove('hide');
  });
}
