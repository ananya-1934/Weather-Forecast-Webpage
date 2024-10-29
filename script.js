const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('.humidity');
const wind = document.getElementById('.wind-speed');

async function checkWeather(city){
    const api_key = "b7eabc2693e258e6be021748a736697c";
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${api_key}`;
    const weather_data = fetch(`${url}`).then(responce => responce.json());

    console.log(weather_data);
}

searchBtn.addEventListener(click, ()=>{
    checkWeather(inputBox.value);
});