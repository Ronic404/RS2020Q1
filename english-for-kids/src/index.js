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

    const rotate = document.createElement('div');
    rotate.className = 'rotate';
    cardsPageItem.append(rotate);
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
      }
    });

    item.addEventListener('mouseout', () => {
      item.classList.remove('translate');
    });
  });
};

window.onload = () => {
  createMainPageList();
  setInterval(generatePages, 200);
  setInterval(translateCards, 200);
};
