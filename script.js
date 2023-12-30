'use strict';


// const apiKey = "d8a89a57e3737e40023eb930748062c8";

// const apiUrl = "https://api.openweathermap.org/data/2.5/units=metric&q=";


const apiKey = "d8a89a57e3737e40023eb930748062c8";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&units=metric&q=";

const searchBox = document.querySelector('.search input');

const searchBtn = document.querySelector('.search button');





async function weather(city) {
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    let data = await response.json();
    
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°C';

    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    searchBox.value = '';
    
}


searchBtn.addEventListener('click', () => {
    
    weather(searchBox.value);
    
})




















































// const apiKey = 'd8a89a57e3737e40023eb930748062c8';


// const fetchData = function (URL, callback) {

//     fetch(`${URL}&appid=${apiKey}`)

//     .then(res => res.json())

//     .then(data => callback(data));

// }

// console.log(fetchData());

// const url = {

//     currentWeather(lat, lon) {

//         return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`

//     },
//     forecast(lat, lon) {

//         return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`

//     },
//     airPollution(lat, lon) {

//         return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`

//     },
//     reverseGeo(lat, lon) {

//         return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`

//     },
//     geo(query) {

//         return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`

//     }

// }