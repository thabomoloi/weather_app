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
        infoDiv.classList.add("info-container");

        this.cityName = document.createElement("h1");
        this.cityName.innerText = data.name + ", " + data.country;
        this.cityName.classList.add("city-name");

        const description = document.createElement("p");
        description.innerText = ((str) => {
            return str.charAt(0).toUpperCase() +
                str.substring(1);

        })(data.description);
        description.classList.add("weather-condition");

        infoDiv.append(this.cityName, description);

        // Weather div
        const div1 = document.createElement("div");
        div1.classList.add("temp-details");

        const weatherDiv = document.createElement("div");
        weatherDiv.classList.add("weather-container");

        const weatherImg = document.createElement("img");
        weatherImg.src = `https://openweathermap.org/img/wn/${data.icon}@4x.png`;
        weatherImg.classList.add("weather-icon");

        this.temperature = document.createElement("div");
        this.temperature.classList.add("temperature");

        this.temperature.innerHTML = `<span>${data.temp.celsius}</span>`;
        div1.append(weatherImg, this.temperature);

        const deg = document.createElement("div");
        deg.classList.add("unit-buttons");
        this.degC = document.createElement("button");
        this.degC.innerText = "°C";
        this.degC.classList.add("display-deg", "deg-btn", "btn");

        this.degF = document.createElement("button");
        this.degF.innerText = "°F";
        this.degF.classList.add("deg-btn", "btn");

        const div2 = document.createElement("div");
        div2.append(this.degC, this.degF);
        deg.append(div2, document.createElement("div"));
        div1.appendChild(deg);
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
        });

        weatherDiv.append(div1, this.details);
        container.append(infoDiv, weatherDiv);
        main.appendChild(container);
        document.querySelector("body")?.appendChild(main);

    }
}

export default Main;