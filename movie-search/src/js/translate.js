let TRANSLATE = '';
const TRANSLATE_KEY = 'trnsl.1.1.20200510T113638Z.46c3baf251ec2738.3d183b0c174296551d32fcd352a7406ebeef7978';

export default function () {
  const MOVIE_SEARCH_VALUE = document.querySelector('#search').value;
  const URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${TRANSLATE_KEY}&text=${MOVIE_SEARCH_VALUE}&lang=ru-en`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      TRANSLATE = data.text;
      global.alert(`Showing results for: ${TRANSLATE}`);
    });
}
