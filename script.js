var APIkey = '&appid=c70ed702f401fa0e4a0c11c4caa37f82';

var inputEl = document.querySelector('.input')
var citiesList = document.querySelector('cities-list')
var searchBtn = document.querySelector('.search-button')


var cityName = localStorage.getItem('cityNameStore')

// link for current day's weater info
var weatherLink = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + APIkey;

// link for 5-day forecast info
var forecastLink = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + APIkey;

// input value setting
function trackCityData() {
    localStorage.setItem('cityNameStore', inputEl.value);
}

// add previously searched cities to history list
for (var i=0; i < localStorage.length; i++) {
    $(".cities-list").append("<p>" + localStorage.getItem(localStorage.key(i)) + "<p>");
}

// GET (function) Day 1 (current day) Forecast Data
$.ajax ({
    url: weatherLink,
    method: "GET"
})

    .then(function(response) {

        $('.city').html("<h2>" + response.name + "</h2>");
        $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
        $('.winds').text("WIND SPEED: " + response.wind.speed + "mph");
        $('.humid').text("HUMIDITY: " + response.main.humidity + "%");
        $('temp').text("TEMPERATURE: " + response.main.temp + " F");

        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var uvIndexLink = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + apiKey;

        // function for the UV Index; GET the UV Index
        $.ajax ({
            url: uvIndexLink,
            method: "GET"
        })

            .then(function(response) {
                var uvIndexValue = response.value;

                $('.uv').text("UV INDEX: " + response.value);

            });

    });

// show the current day/date
var dateCurrent = moment().format("dddd, MMMM Do ");

function dateFunction() {
    $(".current-date").text(dateCurrent);
};
dateFunction();

// show 5-day forecast
$ajax ({
    url: forecastLink,
    method: "GET"
})

    .then(function(response){
        var Day1 = moment(response.list[0].dt_text).format("ddd, MMM D ");

        // Day 1
        $("")

        // Day 2
        $("")

        // Day 3
        $("")

        // Day 4
        $("")

        // Day 5
        $("")


    })




// just notes for later
    // .catch(err => alert("You entered an INVALID city name!"))
    // $('.uv').css("background-color", uvColor(uvIndexValue));