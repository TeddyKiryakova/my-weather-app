let now=new Date();
let h2=document.querySelector("h2");
let hours= now.getHours();
if (hours < 10){
  hours=`0${hours}`;
}
let minutes=now.getMinutes();
if (minutes<10){
  minutes=`0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day=days[now.getDay()];

h2.innerHTML=`${day} ${hours}:${minutes}`;

//


function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".change-city");
  let city = document.querySelector("h1");
  city.innerHTML = cityInput.value;
  insertCity(cityInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
//
function insertCity(city) {
  let apiKey = "70aecad43749ddb42a27c8361beb973e";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let actualTemp = document.querySelector("#temperature");
  actualTemp.innerHTML = `${temperature}°C`;
  let humidity = response.data.main.humidity;
  let actualHumidity = document.querySelector("#humidity");
  actualHumidity.innerHTML = `Humidity:${humidity}%`;
}



//
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let actualTemp = document.querySelector("#temperature");
  actualTemp.innerHTML = `${temperature}°C`;
  let humidity = response.data.main.humidity;
  let actualHumidity = document.querySelector("#humidity");
  actualHumidity.innerHTML = `Humidity:${humidity}%`;
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
}
function showPosition(position) {
  let apiKey = "70aecad43749ddb42a27c8361beb973e";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}