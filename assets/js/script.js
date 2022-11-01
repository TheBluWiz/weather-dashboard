//API variables
var lat;
var lon;
var searchedCity;
geolocateAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=fcdebc28be344f9380616382fd7b6484`
weatherForcastAPI = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=fcdebc28be344f9380616382fd7b6484`