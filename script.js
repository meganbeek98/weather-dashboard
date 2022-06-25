var APIkey = '&appid=c70ed702f401fa0e4a0c11c4caa37f82';

var input = document.querySelector('.input')
var citiesList = document.querySelector('cities-list')
var searchBtn = document.querySelector('.search-button')


var cityName = localStorage.getItem('cityNameStore')

// link for current day's weater info
var weatherLink = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + APIkey;


var forecastLink = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + APIkey;


// .catch(err => alert("You entered an INVALID city name!"))

//     var tempValue/tempEl = data['main']['temp'];
//     var nameValue/nameEl = data['name'];
//     var descriptonValue/descriptionEl = data['weather'][0]['description'];
