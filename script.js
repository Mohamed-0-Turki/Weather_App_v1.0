const searchBtn = document.querySelector(".input-and-btn .submit-btn"),
    cityName = document.querySelector("#search-city"),
    weatherIcon = document.querySelector(".weather-icon"),
    apiKey = "49f48954e38bcf44266f698756412d48",
    errorMessage = document.querySelector(".error-message");

searchBtn.addEventListener("click", () => {
    checkWeather(cityName.value);
});

async function checkWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        let jsObj = await response.json();
        document.querySelector(".country").innerHTML = `Country: ${jsObj.sys.country}`;
        document.querySelector(".city").innerHTML = `City: ${jsObj.name}`;
        document.querySelector(".temp").innerHTML = `${Math.round(jsObj.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${jsObj.main.humidity} %`;
        document.querySelector(".speed").innerHTML = `${jsObj.wind.speed} Km/h`
        const icon = {
            "Clouds": "./images/clouds.png",
            "Clear": "./images/clear.png",
            "Rain": "./images/rain.png",
            "Drizzle": "./images/drizzle.png",
            "Mist": "./images/mist.png",
        }
        weatherIcon.src = icon[jsObj.weather[0].main];
        errorMessage.style.display = "none";
        cityName.style.borderColor = "#FFAC41";
    }
    catch (error) {
        errorMessage.style.display = "block";
        cityName.style.borderColor = "#ff1e56";
    }
}