// UI Hooks
var inputEl = document.querySelector('#input');
var searchBtnEl = document.querySelector('#searchBtn');
var searchHistoryEl = document.querySelector('#Search-History')

//API variables
var lat;
var lon;
var searchedCity;
geolocateAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=fcdebc28be344f9380616382fd7b6484`
weatherForcastAPI = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=fcdebc28be344f9380616382fd7b6484`

var history = [];
if (JSON.parse(localStorage.getItem("history")) !== null) {
  history = JSON.parse(localStorage.getItem("history"));
  for (let i = 0; i < history.length; i++) {
    city = document.createElement("button");
    city.textContent = history[i];
    searchHistoryEl.appendChild(city);
  }
}

function getAPI(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response.status);
      if (response.status === 200) {
        console.log("Yay")
      } else {
        console.log("Sad")
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // parse response
    });
}

function isNew() {
  for (let i = 0; i < history.length; i++) {
    if (history[i] === searchedCity) {
      return true
    }
  }
  return false
}

searchBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  searchedCity = inputEl.value
  history.push("searchedCity")
  
});