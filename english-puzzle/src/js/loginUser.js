import { RSSCHOOL_API_URL } from './variables.js';

const AUTHORIZATION_EMAIL = document.querySelector('#authorization-email');
const AUTHORIZATION_PASSWORD = document.querySelector('#authorization-password');
const AUTHORIZATION_ERROR = document.querySelector('#authorization-error');
const AUTHORIZATION_BUTTON = document.querySelector('#authorization__button');

AUTHORIZATION_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();

  loginUser({ email: 'ronic4040@inbox.ru', password: 'Metall4040!' });
});

async function loginUser(user) {
  const response = await fetch(`${RSSCHOOL_API_URL}signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  window.console.log(data);
}
