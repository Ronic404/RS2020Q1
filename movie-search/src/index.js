/* eslint-disable import/extensions */
import {
  Swiper, Navigation, Pagination, Scrollbar,
} from '../node_modules/swiper/js/swiper.esm.js';

import translate from './js/translate.js';

Swiper.use([Navigation, Pagination, Scrollbar]);

const BUTTON = document.querySelector('#button');
const MOVIE_SEARCH = document.querySelector('#search');
const API_KEY = '646a227e';
const MOVIE_TITLE = document.querySelectorAll('.slide-title');
const MOVIE_POSTER = document.querySelectorAll('.slide-poster');
const MOVIE_YEAR = document.querySelectorAll('.slide-year');
const MOVIE_RATING = document.querySelector('.slide-rating');
let imdbID = '';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  nested: true,
  watchOverflow: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function getMovieTitle() {
  const MOVIE_SEARCH_VALUE = document.querySelector('#search').value || 'hard die';
  if (MOVIE_SEARCH_VALUE.match(/[ёйцукенгшщзхъфывапролджэячсмитьбю]/i)) {
    translate();
  } else {
    const URL = `https://www.omdbapi.com/?s=${MOVIE_SEARCH_VALUE}&apikey=${API_KEY}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (!data.Search) {
          global.alert(`No results for: ${MOVIE_SEARCH_VALUE}`);
        } else {
          for (let i = 0; i < data.Search.length; i += 1) {
            MOVIE_TITLE[i].innerText = data.Search[i].Title;
            MOVIE_POSTER[i].style.backgroundImage = `url(${data.Search[i].Poster})`;
            MOVIE_YEAR[i].innerText = data.Search[i].Year;
            imdbID = data.Search[i].imdbID;
            MOVIE_TITLE[i].setAttribute('href', `https://www.imdb.com/title/${imdbID}/?ref_=fn_al_tt_1`);
          }
        }
      });
  }
}

function getMovieRating() {
  const URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      MOVIE_RATING.innerText = data.imdbRating;
    });
}

MOVIE_SEARCH.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    getMovieTitle();
    getMovieRating();
  }
});

BUTTON.addEventListener('click', () => {
  getMovieTitle();
  getMovieRating();
});

swiper.init();
getMovieTitle();
getMovieRating();
