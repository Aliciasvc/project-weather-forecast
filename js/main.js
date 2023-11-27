let key = "cebcd482eda57fa9a6714c1c2ba91885";
let inputCity = document.querySelector("#input-city");
/*let weatherCity = document.querySelector("#Weather-city");
let infoDregrees = document.querySelector("#info-degrees");
let iconWeather = document.querySelector("#icon-weather");
let descriptionWeather = document.querySelector("#description-weather");
let moistureInfo = document.querySelector("#moisture-info");*/

function buttonSearch(){
    let city = inputCity.value;
    
    searchCity(city);
};

async function searchCity(city) {
    let dataCities = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then (responseServer => responseServer.json());

    printOnScreen(dataCities);
}

function printOnScreen(dataCities) {
    document.querySelector("#weather-city").innerHTML = dataCities.name;

    document.querySelector("#info-degrees").innerHTML = Math.floor(dataCities.main.temp) + "°C";

    document.querySelector("#icon-weather").src = `https://openweathermap.org/img/wn/${dataCities.weather[0].icon}.png`;

    document.querySelector("#description-weather").innerHTML = dataCities.weather[0].description;

    document.querySelector("#moisture-info").innerHTML = dataCities.main.humidity + "%"
}