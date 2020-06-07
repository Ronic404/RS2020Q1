import './sass/main.scss';

import './js/createUser.js';
import getWords from './js/getWords.js';


// const loginUser = async (user) => {
//   const rawResponse = await fetch(`${RSSCHOOL_API_URL}signin`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };

// loginUser({ email: 'ronic111@inbox.ru', password: 'Metall4040!' });


getWords(3, 3); // Страницы 0-29 по 20 слов; Группы 0-5
