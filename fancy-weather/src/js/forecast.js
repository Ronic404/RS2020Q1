/* eslint-disable no-param-reassign */
import {
  WEEKDAYS, MONTHS, forecastTemperature, forecastWeekday, forecastImage, forecastDay,
  forecastMonth, forecastTime, titleCity,
} from './variables.js';

function getForecast(city) {
  const WEATHER_API_TOKEN = '0195bd982c2b4e669d3102224202405';
  const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_TOKEN}&q=${city}&days=5`;
  fetch(WEATHER_URL)
    .then((response) => response.json())
    .then((data) => {
      const days = data.forecast.forecastday;
      const today = data.current;
      const { location } = data;

      setPageTitle(location);
      setForecastTemperature(today, days);
      setForecastWeekday();
      setForecastImage(days);
      setForecastDescription(today);
    });
}

function setPageTitle(location) {
  titleCity.innerText = `${location.name}, ${location.country}`;
}

function setForecastTemperature(today, days) {
  forecastTemperature.forEach((el, day) => {
    el.innerText = (day === 0) ? Math.round(today.temp_c) : Math.round(days[day].day.avgtemp_c);
  });
}

function setForecastWeekday() {
  const date = new Date();
  forecastWeekday.forEach((el, day) => {
    const numberOfWeekdays = (date.getDay() + day > 6) ? date.getDay() - 7 : date.getDay();
    el.innerText = (day === 0) ? WEEKDAYS[numberOfWeekdays + day].slice(0, 3)
      : WEEKDAYS[numberOfWeekdays + day];
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

export { getForecast, setPageTitle };
