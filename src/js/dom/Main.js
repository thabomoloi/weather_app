import Header from "./Header";

class Main {

    constructor(data) {

        this.header = new Header();

        const main = document.createElement("main");

        const container = document.createElement("div");
        container.classList.add("container");

        // Info div: city name and weather description
        const infoDiv = document.createElement("div");

        const cityName = document.createElement("h1");
        cityName.innerText = data.name;
        cityName.classList.add("city-name");

        const description = document.createElement("p");
        description.innerText = data.description;
        description.classList.add("weather-condition");

        infoDiv.append(cityName, description);

        // Weather div
        const weatherDiv = document.createElement("div");
        const weatherImg = document.createElement("img");
        weatherImg.src = `https://openweathermap.org/img/wn/${data.icon}@4x.png`;
        weatherImg.classList.add("weather-icon");

        const temperature = document.createElement("div");
        temperature.innerHTML = `<span>${data.temp.celsius}</span>`;

        const deg = document.createElement("div");
        const degC = document.createElement("button");
        degC.innerText = "°C";
        degC.classList.add("display-deg");

        const degF = document.createElement("button");
        degF.innerText = "°F";

        deg.append(degC, degF);

        const details = document.createElement("div");
        details.classList.add("weather-details");
        details.innerHTML = `
            <p>Feels like: ${data.feelsLike.celsius}</p>
            <p>Humidty: ${data.humidity}</p>
            <p>Wind: ${data.windSpeed.kmph}</p>
        `;

        degC.addEventListener("click", () => {
            temperature.innerHTML = `<span>${data.temp.celsius}</span>`;
            details.innerHTML = `
                <p>Feels like: ${data.feelsLike.celsius}</p>
                <p>Humidty: ${data.humidity}</p>
                <p>Wind: ${data.windSpeed.kmph}</p>
            `;
            degF.classList.remove("display-deg");
            degC.classList.add("display-deg");
        });
        degF.addEventListener("click", () => {
            temperature.innerHTML = `<span>${data.temp.fahrenheit}</span>`;
            details.innerHTML = `
                <p>Feels like: ${data.feelsLike.fahrenheit}</p>
                <p>Humidty: ${data.humidity}</p>
                <p>Wind: ${data.windSpeed.mph}</p>
            `;
            degC.classList.remove("display-deg");
            degF.classList.add("display-deg");
        });

        weatherDiv.append(weatherImg, temperature, deg, details);
        main.append(infoDiv, weatherDiv);
        document.querySelector("body")?.appendChild(main);
    }
}

export default Main;