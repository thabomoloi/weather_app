import Header from "./Header";

class Main {

    constructor(data) {

        this.unit = "C";
        this.header = new Header();

        const main = document.createElement("main");

        const container = document.createElement("div");
        container.classList.add("container");

        // Info div: city name and weather description
        const infoDiv = document.createElement("div");

        this.cityName = document.createElement("h1");
        this.cityName.innerText = data.name + ", " + data.country;
        this.cityName.classList.add("city-name");

        const description = document.createElement("p");
        description.innerText = data.description;
        description.classList.add("weather-condition");

        infoDiv.append(this.cityName, description);

        // Weather div
        const weatherDiv = document.createElement("div");
        const weatherImg = document.createElement("img");
        weatherImg.src = `https://openweathermap.org/img/wn/${data.icon}@4x.png`;
        weatherImg.classList.add("weather-icon");

        this.temperature = document.createElement("div");
        this.temperature.innerHTML = `<span>${data.temp.celsius}</span>`;

        const deg = document.createElement("div");
        this.degC = document.createElement("button");
        this.degC.innerText = "°C";
        this.degC.classList.add("display-deg", "deg-btn", "btn");

        this.degF = document.createElement("button");
        this.degF.innerText = "°F";
        this.degF.classList.add("deg-btn", "btn");

        deg.append(this.degC, this.degF);

        this.details = document.createElement("div");
        this.details.classList.add("weather-details");
        this.details.innerHTML = `
            <p>Feels like: ${data.feelsLike.celsius}</p>
            <p>Humidty: ${data.humidity}</p>
            <p>Wind: ${data.windSpeed.kmph}</p>
        `;

        this.degC.addEventListener("click", () => {
            this.temperature.innerHTML = `<span>${data.temp.celsius}</span>`;
            this.details.innerHTML = `
                <p>Feels like: ${data.feelsLike.celsius}</p>
                <p>Humidty: ${data.humidity}</p>
                <p>Wind: ${data.windSpeed.kmph}</p>
            `;
            this.degF.classList.remove("display-deg");
            this.degC.classList.add("display-deg");
            this.unit = "C";
        });
        this.degF.addEventListener("click", () => {
            this.temperature.innerHTML = `<span>${data.temp.fahrenheit}</span>`;
            this.details.innerHTML = `
                <p>Feels like: ${data.feelsLike.fahrenheit}</p>
                <p>Humidty: ${data.humidity}</p>
                <p>Wind: ${data.windSpeed.mph}</p>
            `;
            this.degC.classList.remove("display-deg");
            this.degF.classList.add("display-deg");
            this.unit = "F";
        });

        weatherDiv.append(weatherImg, this.temperature, deg, this.details);
        main.append(infoDiv, weatherDiv);
        document.querySelector("body")?.appendChild(main);

    }
    displayNewData(data) {
        if (data) {
            this.cityName.innerText = data.name + ", " + data.country;
            if (this.degC.classList.contains("display-deg")) {
                this.temperature.innerHTML = `<span>${data.temp.celsius}</span>`;
                this.details.innerHTML = `
                    <p>Feels like: ${data.feelsLike.celsius}</p>
                    <p>Humidty: ${data.humidity}</p>
                    <p>Wind: ${data.windSpeed.kmph}</p>
                `;
            } else {
                this.temperature.innerHTML = `<span>${data.temp.fahrenheit}</span>`;
                this.details.innerHTML = `
                    <p>Feels like: ${data.feelsLike.fahrenheit}</p>
                    <p>Humidty: ${data.humidity}</p>
                    <p>Wind: ${data.windSpeed.mph}</p>
                `;
            }
        }
    }
}

export default Main;