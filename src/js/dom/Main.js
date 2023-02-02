import Header from "./Header";

class Main {

    constructor(city, icon, descr, temp, feelsLike, humidity, windSpeed) {

        this.header = new Header();

        const main = document.createElement("main");

        const container = document.createElement("div");
        container.classList.add("container");

        // Info div: city name and weather description
        const infoDiv = document.createElement("div");

        const cityName = document.createElement("h1");
        cityName.innerText = city;
        cityName.classList.add("city-name");

        const description = document.createElement("p");
        description.innerText = descr;
        description.classList.add("weather-condition");

        infoDiv.append(cityName, description);

        // Weather div
        const weatherDiv = document.createElement("div");
        const weatherImg = document.createElement("img");
        weatherImg.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        weatherImg.classList.add("weather-icon");

        const temperature = document.createElement("div");
        temperature.innerHTML = `<span>${temp}</span>`;

        const deg = document.createElement("div");
        const degC = document.createElement("button");
        degC.innerText = "°C";
        const degF = document.createElement("button");
        degF.innerText = "°F";

        deg.append(degC, degF);

        const details = document.createElement("div");
        details.classList.add("weather-details");
        details.innerHTML = `
            <p>Feels like: ${feelsLike}</p>
            <p>Humidty: ${humidity}</p>
            <p>Wind: ${windSpeed}</p>
        `;
        weatherDiv.append(weatherImg, temperature, deg, details);
        alert("Hello");
        main.append(infoDiv, weatherDiv);
        document.querySelector("body")?.appendChild(main);
    }
}

export default Main;