export default function showCoordinates(coordinates) {
  const latitude = document.querySelector('.geo-coordinates__latitude');
  const longitude = document.querySelector('.geo-coordinates__longitude');

  if (typeof coordinates === 'string') {
    latitude.innerHTML = `latitude: ${coordinates.split(',')[0]}°`;
    longitude.innerHTML = `longitude: ${coordinates.split(',')[1]}°`;
  } else {
    latitude.innerHTML = `latitude: ${coordinates[0]}°`;
    longitude.innerHTML = `longitude: ${coordinates[1]}°`;
  }
}
