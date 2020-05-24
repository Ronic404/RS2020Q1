/* eslint-disable no-use-before-define */
/* eslint-disable no-multiple-empty-lines */
// import './scss/main.scss';

const latitude = document.querySelector('.geo-coordinates__latitude');
const longitude = document.querySelector('.geo-coordinates__longitude');

let mapCoordinates = '';

function disaplayLocation(coordinates) {
  if (typeof coordinates === 'string') {
    latitude.innerHTML = `latitude: ${coordinates.split(',')[0]}°`;
    longitude.innerHTML = `longitude: ${coordinates.split(',')[1]}°`;
  } else {
    latitude.innerHTML = `latitude: ${coordinates[0]}°`;
    longitude.innerHTML = `longitude: ${coordinates[1]}°`;
  }
}

function setMapCoordinates(coordinates) {
  mapCoordinates = coordinates.split(',');
}

function loadBackgroundImage(city) {
  const IMAGES_TOKEN = 'XiF9NKaCcFIZNpZZAZkN_wQJt-P8QNDzy4XgwpEED8o';
  // const IMAGES_URL = `https://api.unsplash.com/search/photos?orientation=landscape&per_page=1&query=${city}&client_id=${IMAGES_TOKEN}`;
  const IMAGES_URL = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${IMAGES_TOKEN}`;
  // const FLICKR_TOKEN = 'a593bbf0b31bd219a7b7ec1330a350ed';
  // const IMAGES_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_TOKEN}&tags=${city},city&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;

  fetch(IMAGES_URL)
    .then((response) => response.json())
    .then((data) => {
      // document.body.style.backgroundImage = `url(${data.photos.photo[0].url_h})`;
      // document.body.style.backgroundImage = `url(${data.results[0].urls.full})`;
      // console.log(data.urls.full);
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      // document.body.style.backgroundImage = `url(${data.results[0].urls.full})`;
    })
    .catch(() => {
      document.body.style.backgroundImage = 'url("https://www.positronx.io/wp-content/uploads/2019/04/bandwidth-limit-exceeded-3807-01.jpg")';
    });
}

function getGeolocation() {
  const GEOLOCATION_TOKEN = '80118c9e4141b6';
  const GEOLOCATION_URL = `https://ipinfo.io/json?token=${GEOLOCATION_TOKEN}`;
  fetch(GEOLOCATION_URL)
    .then((response) => response.json())
    .then((data) => {
      disaplayLocation(data.loc);
      setMapCoordinates(data.loc);
      loadBackgroundImage(data.city);
    });
}






const titleCity = document.querySelector('.title__city');
const searchInput = document.querySelector('#city');
const searchButton = document.querySelector('#search');

function setPageTitle(city, country) {
  titleCity.innerText = `${city}, ${country}`;
}

function getGeoObjectFromInput() {
  const YANDEX_TOKEN = 'b456edb6-d61e-42d8-b468-f0c7e0c63be9';
  const GEOCODUNG_URL = `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_TOKEN}&format=json&geocode=${searchInput.value}`;
  fetch(GEOCODUNG_URL)
    .then((response) => response.json())
    .then((data) => {
      const city = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
      const country = data.response.GeoObjectCollection.featureMember[0].GeoObject.description;
      loadBackgroundImage(city);
      setPageTitle(city, country);

      mapCoordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse();
      disaplayLocation(mapCoordinates);

      getForecast(city);

      document.querySelector('.map__image').innerHTML = '';
      init();
      // console.log(data.response.GeoObjectCollection);
    })
    .catch(() => alert(`Вы ввели: ${searchInput.value}\nТакой адрес не существует`));
}

searchInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    getGeoObjectFromInput();
  }
});

searchButton.addEventListener('click', () => {
  getGeoObjectFromInput();
});





const forecastTemperature = document.querySelectorAll('#forecast-temperature');
const forecastWeekday = document.querySelectorAll('#forecast-title');
const forecastImage = document.querySelectorAll('#forecast-image');
const forecastDay = document.querySelector('#forecast-day');
const forecastMonth = document.querySelector('#forecast-month');
const forecastTime = document.querySelector('#forecast-time');
const forecastDescription = document.querySelector('#forecast-description');

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getForecast(city) {
  const WEATHER_API_TOKEN = '0195bd982c2b4e669d3102224202405';
  const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_TOKEN}&q=${city}&days=4`;
  fetch(WEATHER_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const days = data.forecast.forecastday;
      const today = data.current;

      setForecastTemperature(today, days);
      setForecastWeekday();
      setForecastImage(days);
      setForecastDescription(today);
    });
}

function setForecastTemperature(today, days) {
  forecastTemperature.forEach((el, day) => {
    el.innerText = (day === 0) ? Math.round(today.temp_c) : Math.round(days[day].day.avgtemp_c);
  });
}

function setForecastWeekday() {
  const date = new Date();
  forecastWeekday.forEach((el, day) => {
    el.innerText = (day === 0) ? WEEKDAYS[date.getDay() + day].slice(0, 3) : WEEKDAYS[date.getDay() + day];
  });
  forecastDay.innerText = date.getDate();
  forecastMonth.innerText = MONTHS[date.getMonth()];
  setInterval(setTime, 1000);
}

function setTime() {
  const date = new Date();
  const hours = (date.getHours().toString().length === 1) ? `0${date.getHours()}` : date.getHours();
  const minutes = (date.getMinutes().toString().length === 1) ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = (date.getSeconds().toString().length === 1) ? `0${date.getSeconds()}` : date.getSeconds();

  forecastTime.innerText = `${hours}:${minutes}:${seconds}`;
}

function setForecastImage(image) {
  forecastImage.forEach((el, day) => {
    // el.style.backgroundImage = `url(${image[day].day.condition.icon})`;
    el.src = `${image[day].day.condition.icon}`;
  });
}

function setForecastDescription(today) {
  const forecastCondition = document.querySelector('#forecast-condition');
  const forecastFeelslike = document.querySelector('#forecast-feelslike');
  const forecastWind = document.querySelector('#forecast-wind');
  const forecastHumidity = document.querySelector('#forecast-humidity');

  forecastCondition.innerText = today.condition.text;
  forecastFeelslike.innerText = `FEELS LIKE: ${Math.round(today.feelslike_c)}°`;
  forecastWind.innerText = `WIND: ${Math.round(today.wind_kph)} m/s`;
  forecastHumidity.innerText = `HUMIDITY: ${today.humidity}%`;
}





getGeolocation();


//= ============ set map ===============
let myMap;
ymaps.ready(init);
function init() {
  myMap = new ymaps.Map('map', {
    center: mapCoordinates,
    zoom: 10,
  }, {
    searchControlProvider: 'yandex#search',
  });
}
//= ============ set map ===============
