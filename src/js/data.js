import { kelvinToCelsius, kelvinToFahrenheit } from "./conversion";

function getName(name) {
    return name.trim()
        .replace(/,\s/g, ",")
        .replace(/\s,/g, ",")
        .replace(/\s/, "+")
}

function filterData(data) {
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
      );
    
    return {
        name: data.name,
        country: regionNames.of(data.sys.country),
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        temp: {
            celsius: kelvinToCelsius(data.main.temp) + "°C",
            fahrenheit: kelvinToFahrenheit(data.main.temp) + "°F"
        },
        feelsLike: {
            celsius: kelvinToCelsius(data.main.feels_like) + "°C",
            fahrenheit: kelvinToFahrenheit(data.main.feels_like) + "°F"
        },
        humidity: data.main.humidity + "%",
        windSpeed: {
            kmph: Math.round(data.wind.speed * 3.6) + " km/h",
            mph: Math.round(data.wind.speed * 2.237) + " mph"
        }
    };
}

async function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getName(location)}&appid=f10b79e03b5de9d11241b8d0e6e46cd3`;
    try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) {
            alert("City Not Found");
            return null;
        }
        const weatherData = await response.json();
        const data = filterData(weatherData);
        return data;
    }
    catch (error) {
        alert(error);
        return null;
    }
}

export default getWeatherData;