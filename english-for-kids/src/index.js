/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import cards from './js/cards.js';

const BURGER = document.querySelector('.burger-menu');
let pageNumber;

BURGER.addEventListener('click', () => {
  document.querySelector('.burger-menu__line').classList.toggle('burger-menu__line_active');
  document.querySelector('.menu').classList.toggle('menu_active');
});

const createMainPageList = () => {
  document.querySelector('.main-page__list').innerText = '';
  document.querySelector('.main-page').classList.remove('none');
  document.querySelector('.cards-page').classList.add('none');

  for (let i = 0; i < cards[0].length; i += 1) {
    const mainPageItem = document.createElement('li');
    mainPageItem.className = 'main-page__item';
    document.querySelector('.main-page__list').append(mainPageItem);

    const img = document.createElement('img');
    img.src = cards[i + 1][1].image;
    img.setAttribute('alt', 'picture');
    mainPageItem.append(img);

    const p = document.createElement('p');
    p.className = 'main-page__item-name';
    p.innerText = cards[0][i];
    mainPageItem.append(p);
  }
};

const createCardsPageList = () => {
  document.querySelector('.cards-page__list').innerText = '';
  document.querySelector('.main-page').classList.add('none');
  document.querySelector('.cards-page').classList.remove('none');

  for (let i = 0; i < cards[pageNumber].length; i += 1) {
    const cardsPageItem = document.createElement('li');
    cardsPageItem.className = 'cards-page__item';
    document.querySelector('.cards-page__list').append(cardsPageItem);

    const img = document.createElement('img');
    img.src = cards[pageNumber][i].image;
    img.setAttribute('alt', 'picture');
    cardsPageItem.append(img);

    const p = document.createElement('p');
    p.className = 'cards-page__item-name';
    p.innerText = cards[pageNumber][i].word;
    cardsPageItem.append(p);

    const p2 = document.createElement('p');
    p2.className = 'cards-page__item-name cards-page__item-name_translate none';
    p2.innerText = cards[pageNumber][i].translation;
    cardsPageItem.append(p2);

    const rotate = document.createElement('div');
    rotate.className = 'rotate';
    cardsPageItem.append(rotate);

    const audio = document.createElement('audio');
    audio.className = 'audio';
    audio.setAttribute('src', cards[pageNumber][i].audioSrc);
    audio.setAttribute('preload', 'auto');
    cardsPageItem.append(audio);

    playAudio();
  }
};

const generatePages = () => {
  document.querySelectorAll('.menu__item').forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('menu_active');
      document.querySelector('.burger-menu__line').classList.remove('burger-menu__line_active');
      if (index === 0) {
        createMainPageList();
      } else {
        pageNumber = index;
        createCardsPageList();
      }
    });
  });

  document.querySelectorAll('.main-page__item').forEach((item, index) => {
    item.addEventListener('click', () => {
      pageNumber = index + 1;
      createCardsPageList();
    });
  });
};

const translateCards = () => {
  document.querySelectorAll('.cards-page__item').forEach((item) => {
    item.addEventListener('click', (event) => {
      if (event.target.classList.contains('rotate')) {
        item.classList.add('translate');
        item.querySelector('.cards-page__item-name').classList.add('none');
        item.querySelector('.cards-page__item-name_translate').classList.remove('none');
      }
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('translate');
      item.querySelector('.cards-page__item-name').classList.remove('none');
      item.querySelector('.cards-page__item-name_translate').classList.add('none');
    });
  });
};

const playAudio = () => {
  document.querySelectorAll('.cards-page__item').forEach((item) => {
    item.addEventListener('click', () => {
      item.querySelector('.audio').setAttribute('autoplay', '');
      setTimeout(() => {
        item.querySelector('.audio').removeAttribute('autoplay', '');
      }, 1500);
    });
  });
};

window.onload = () => {
  createMainPageList();
  setInterval(generatePages, 200);
  setInterval(translateCards, 200);
};
