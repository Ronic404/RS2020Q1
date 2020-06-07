import { RSSCHOOL_API_URL } from './variables.js';

// Страницы 0-29 по 20 слов
// Группы 0-5

export default function (page, group) {
  fetch(`${RSSCHOOL_API_URL}words?page=${page}&group=${group}`)
    .then((response) => response.json())
    .then((data) => {
      window.console.log(data);
    });
}
