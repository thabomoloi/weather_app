
import Main from "./dom/Main";
import getWeatherData from "./data";

async function createView() {
    const data = await getWeatherData("Cape Town");
    new Main(
        data.name,
        data.icon,
        data.description,
        data.temp.celsius,
        data.feelsLike.celsius,
        data.humidity,
        data.windSpeed.kmph
    );
}
createView();