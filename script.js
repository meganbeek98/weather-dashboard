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
$.ajax ({
    url: forecastLink,
    method: "GET"
})

    .then(function (response) {
        // START of variables for indivual days (in 5-Day Forecast)

        // Day 1
        var Day1 = moment(response.list[0].dt_text).format("ddd, MMM D ");

        $(".1-temp").text("Temp: " + response.list[0].main.temp + " F");
        $(".1-date").html("<h6>" + Day1 + "</h6>");
        $(".1-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png'>");
        $(".1-humid").text("Humidity: " + response.list[0].main.humidity + "%");

        // Day 2
        var Day2 = moment(response.list[8].dt_text).format("ddd, MMM D");

        $(".2-temp").text("Temp: " + response.list[8].main.temp + " F");
        $(".2-date").html("<h6>" + Day2 + "</h6>");
        $(".2-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png'>");
        $(".2-humid").text("Humidity: " + response.list[8].main.humidity + "%");

        // Day 3
        var Day3 = moment(response.list[16].dt_text).format("ddd, MMM D");

        $(".3-temp").text("Temp: " + response.list[16].main.temp + " F");
        $(".3-date").html("<h6>" + Day3 + "</h6>");
        $(".3-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png'>");
        $(".3-humid").text("Humidity: " + response.list[16].main.humidity + "%");

        // Day 4
        var Day4 = moment(response.list[24].dt_text).format("ddd, MMM D");
        $(".4-temp").text("Temp: " + response.list[24].main.temp + " F");
        $(".4-date").html("<h6>" + Day4 + "</h6>");
        $(".4-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png'>");
        $(".4-humid").text("Humidity: " + response.list[24].main.humidity + "%");

        // Day 5
        var Day5 = moment(response.list[32].dt_text).format("ddd, MMM D");

        $(".5-temp").text("Temp: " + response.list[32].main.temp + " F");
        $(".5-date").html("<h6>" + Day5 + "</h6>");
        $(".5-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png'>");
        $(".5-humid").text("Humidity: " + response.list[32].main.humidity + "%");


    });

    // EVENT LISTENERS

    searchBtn.addEventListener('click', trackCityData);




// just notes for later
    // .catch(err => alert("You entered an INVALID city name!"))
    // $('.uv').css("background-color", uvColor(uvIndexValue));