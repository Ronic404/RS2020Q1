import { RSSCHOOL_API_URL } from './variables.js';

export default async function getBackendStat() {
  const TOKEN = localStorage.getItem('token');
  const USER_ID = localStorage.getItem('userId');

  const response = await fetch(`${RSSCHOOL_API_URL}users/${USER_ID}/settings`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json',
    },
  });

  if (response.status === 404) {
    setBackendStat();
  } else if (response.status === 200) {
    const data = await response.json();

    // if (!localStorage.getItem('player-level')) {
    //   localStorage.setItem('player-level', JSON.stringify([data.optional.round, data.optional.level]));
    // }

    // if (!localStorage.getItem('picture-button')) {
    //   localStorage.setItem('picture-button', data.optional.picture);
    // }

    // if (!localStorage.getItem('audio-button')) {
    //   localStorage.setItem('audio-button', data.optional.audio);
    // }

    // if (!localStorage.getItem('translate-button')) {
    //   localStorage.setItem('translate-button', data.optional.translate);
    // }

    localStorage.setItem('player-level', JSON.stringify([data.optional.round, data.optional.level]));
    localStorage.setItem('picture-button', data.optional.picture);
    localStorage.setItem('audio-button', data.optional.audio);
    localStorage.setItem('translate-button', data.optional.translate);

    setBackendStat();
  }
}

export async function setBackendStat() {
  const TOKEN = localStorage.getItem('token');
  const USER_ID = localStorage.getItem('userId');
  const ROUND = document.querySelector('#rounds').value;
  const LEVEL = document.querySelector('#groups').value;
  const isTranslate = localStorage.getItem('translate-button');
  const isAudio = localStorage.getItem('audio-button');
  const isPicture = localStorage.getItem('picture-button');

  await fetch(`${RSSCHOOL_API_URL}users/${USER_ID}/settings`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      optional: {
        round: ROUND,
        level: LEVEL,
        translate: isTranslate,
        audio: isAudio,
        picture: isPicture,
      },
    }),
  });
}
