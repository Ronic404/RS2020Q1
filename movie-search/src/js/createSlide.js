export default function () {
  const createLi = document.createElement('li');
  createLi.className = 'swiper-slide';

  const createTitle = document.createElement('p');
  createTitle.className = 'slide-title';

  const createPoster = document.createElement('div');
  createPoster.className = 'slide-poster';

  const createYear = document.createElement('p');
  createYear.className = 'slide-year';

  const createRating = document.createElement('p');
  createRating.className = 'slide-rating';

  createLi.append(createTitle, createPoster, createYear, createRating);
  return createLi;
}
