const { response } = require("express")

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var decscription = document.querySelector('.description')
var temp = document.querySelector('.temp')

fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descriptonValue = data['weather'][0]['description'];

})