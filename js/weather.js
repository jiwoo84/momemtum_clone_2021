function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"9fa4320ce0f2af5804626dcb41e2a97e"}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} but always 🌈 / ${data.main.temp}`;
      city.innerText = `in ${data.name}`;
    });
}

function onGeoError() {
  alert("can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
