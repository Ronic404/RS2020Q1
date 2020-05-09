/* eslint-disable import/extensions */
import {
  Swiper, Navigation, Pagination, Scrollbar,
} from '../node_modules/swiper/js/swiper.esm.js';

import createSlide from './js/createSlide.js';

Swiper.use([Navigation, Pagination, Scrollbar]);

const BUTTON = document.querySelector('#button');
const MOVIE_SEARCH = document.querySelector('#search');
const SWIPER_WRAPPER = document.querySelector('.swiper-wrapper');
const API_KEY = '646a227e';
const MOVIE_TITLE = document.querySelector('.slide-title');
const MOVIE_POSTER = document.querySelector('.slide-poster');
const MOVIE_YEAR = document.querySelector('.slide-year');
const MOVIE_RATING = document.querySelector('.slide-rating');
let imdbID = '';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
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
  const MOVIE_SEARCH_VALUE = document.querySelector('#search').value;
  const URL = `https://www.omdbapi.com/?s=${MOVIE_SEARCH_VALUE}&apikey=${API_KEY}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      MOVIE_TITLE.innerText = data.Search[0].Title;
      MOVIE_POSTER.style.backgroundImage = `url(${data.Search[0].Poster})`;
      MOVIE_YEAR.innerText = data.Search[0].Year;
      imdbID = data.Search[0].imdbID;
    })
    .catch(() => alert('Нет такого фильма'));
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
createSwiper();
