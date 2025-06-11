# Weather App

A simple web application that displays the current weather for any city, including temperature, humidity, wind speed, and a country flag. The app uses the OpenWeatherMap API and displays a weather icon based on the current conditions.

## Features

-   Search for weather by city name
-   Displays temperature, humidity, and wind speed
-   Shows the country flag for the selected city
-   Weather icons for different conditions (clouds, clear, rain, mist, snow, drizzle)
-   Error handling for invalid city names

## Getting Started

### Prerequisites

-   Modern web browser
-   OpenWeatherMap API key ([get one here](https://openweathermap.org/api))

### Setup

1. Clone or download this repository.
2. Create a `.env` file in the project root and add your API key:
    ```
    API_KEY=your_openweathermap_api_key
    ```
3. Add `.env` to your `.gitignore` to keep your API key secure.
4. Open `index.html` in your browser.

> **Note:** For frontend projects, environment variables in `.env` are not automatically available in JavaScript. You must inject the API key into your HTML or use a build tool (like Vite, Webpack, or Create React App) to expose it to your code. See the code comments for details.

## File Structure

-   `index.html` – Main HTML file
-   `main.js` – JavaScript logic for fetching and displaying weather
-   `style/` – CSS and SCSS files for styling
-   `images/` – Weather and UI icons

## License

This project is for educational purposes only.
