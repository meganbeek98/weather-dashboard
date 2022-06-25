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
        // START of variables for indivual days (in 5-Day Forecast)

        // Day 1
        var Day1 = moment(response.list[0].dt_text).format("ddd, MMM D ");

        $(".1-temp")
        $(".1-date")
        $(".1-icon")
        $(".1-humid")

        // Day 2
        var Day2 = moment(response.list[8].dt_text).format("ddd, MMM D");

        $(".2-temp")
        $(".2-date")
        $(".2-icon")
        $(".2-humid")

        // Day 3
        var Day3 = moment(response.list[16].dt_text).format("ddd, MMM D");

        $(".3-temp")
        $(".3-date")
        $(".3-icon")
        $(".3-humid")

        // Day 4
        var Day4 = moment(response.list[24].dt_text).format("ddd, MMM D");
        $(".4-temp")
        $(".4-date")
        $(".4-icon")
        $(".4-humid")

        // Day 5
        var Day5 = moment(response.list[32].dt_text).format("ddd, MMM D");

        $(".5-temp")
        $(".5-date")
        $(".5-icon")
        $(".5-humid")


    })




// just notes for later
    // .catch(err => alert("You entered an INVALID city name!"))
    // $('.uv').css("background-color", uvColor(uvIndexValue));