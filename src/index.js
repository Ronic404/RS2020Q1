/* eslint-disable no-undef */
const BURGER = document.querySelector('.burger-menu');

BURGER.addEventListener('click', () => {
  document.querySelector('.burger-menu__line').classList.toggle('burger-menu__line_active');
  document.querySelector('.menu').classList.toggle('menu_active');
});

burgerMenuClickHandler();
