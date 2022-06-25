const { response } = require("express")

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var decscription = document.querySelector('.description')
var temp = document.querySelector('.temp')

button.addEventListener('click',function(){

    
})
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=c70ed702f401fa0e4a0c11c4caa37f82')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descriptonValue = data['weather'][0]['description'];

})