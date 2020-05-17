// import './scss/main.scss';

const GEOLOCATION_TOKEN = '80118c9e4141b6';
const GEOLOCATION_URL = `https://ipinfo.io/json?token=${GEOLOCATION_TOKEN}`;

const IMAGES_TOKEN = 'XiF9NKaCcFIZNpZZAZkN_wQJt-P8QNDzy4XgwpEED8o';
const IMAGES_URL = `https://api.unsplash.com/search/photos?orientation=landscape&per_page=1&query=izhevsk&client_id=${IMAGES_TOKEN}`;

// const MAPBOX_TOKEN = 'pk.eyJ1Ijoicm9uaWM0MDQiLCJhIjoiY2thYjdzMXF5MDhtZDJycXl3ajc0MjYwaCJ9.xs_ZjikVrEPrm1Djr6MbsA';
const YANDEX_TOKEN = 'b456edb6-d61e-42d8-b468-f0c7e0c63be9';

let latitude = document.querySelector('.geo-coordinates__latitude');
let longitude = document.querySelector('.geo-coordinates__longitude');


function getGeolocation() {
  fetch(GEOLOCATION_URL)
    .then((response) => response.json())
    .then((data) => {
      latitude.innerHTML = `latitude: ${data.loc.split(',')[0]}°`;
      longitude.innerHTML = `longitude: ${data.loc.split(',')[1]}°`;
    });
}

function getImagesUrl() {
  fetch(IMAGES_URL)
    .then((response) => response.json())
    .then((data) => {
      document.body.style.backgroundImage = `url(${data.results[0].urls.full})`;
      // console.log(data.results[0].urls.full);
    });
}


//= ============ set map ===============
let myMap;
ymaps.ready(init);
function init() {
  myMap = new ymaps.Map('map', {
    center: [56.8500, 53.2333],
    zoom: 10,
  }, {
    searchControlProvider: 'yandex#search',
  });
}
//= ============ set map ===============

getGeolocation();
getImagesUrl();

// (function () {
//   console.log(getImagesUrl());
//   document.querySelector('.wrapper').style.background = `${getImagesUrl()}`;
// }());
