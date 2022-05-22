function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apikey = "8f7be36fb8a4700a809030b5729bb13a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apikey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
