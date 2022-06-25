const { response } = require("express")

var button = document.querySelector('.button')
var inputEl = document.querySelector('.inputEl')
var name = document.querySelector('.name')
var decscription = document.querySelector('.description')
var temp = document.querySelector('.temp')

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=c70ed702f401fa0e4a0c11c4caa37f82')
    .then(response => response.json())
    .then(data => {
        var nameEl = data['name'];
        var tempEl = data['temp'];
        var decriptionEl = data['weather'][0]['description'];
    })

.catch(err => alert("You entered an INVALID city name!"))

})
})

//     var tempValue/tempEl = data['main']['temp'];
//     var nameValue/nameEl = data['name'];
//     var descriptonValue/descriptionEl = data['weather'][0]['description'];
