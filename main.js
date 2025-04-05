// API key for OpenWeatherMap
const apiKey = "fd7f0fd8f47146891df5ec66586f0fab";

// Selecting DOM elements for search button, input field, weather icon, and weather container
const searchBtn = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

// Selecting the flag element to display the country flag
flag = document.querySelector(".flag");

// Base URL for OpenWeatherMap API with metric units
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Function to fetch and display weather data for a given city
async function checkWheather(city) {
    // Fetching weather data from the API
    const response = await fetch(ApiUrl + city + `&appid=${apiKey}`);
    
    // Handling the case where the city is not found (404 error)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"; // Show error message
        weather.style.display = "none"; // Hide weather details
    } else {
        // Parsing the response JSON
        var data = await response.json();
        
        // Updating the DOM with weather data
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C"; // Temperature
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %"; // Humidity
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; // Wind speed
        document.querySelector(".city").innerHTML = data.name; // City name
        flag.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`; // Country flag
        
        // Logging data for debugging purposes
        console.log(data);
        console.log(data.weather[0].main);
        
        // Updating the weather icon based on the weather condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        
        // Displaying the weather details and hiding the error message
        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Function to get the city name from the input field and fetch its weather
function getCity() {
    checkWheather(searchInput.value); // Call the weather function with the input value
    searchInput.value = ""; // Clear the input field
    searchInput.focus(); // Focus back on the input field
}

// Adding event listener to the search button to fetch weather on click
searchBtn.addEventListener("click", () => {
    getCity();
});

// Adding event listener to the input field to fetch weather on pressing Enter
searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        getCity();
    }
});