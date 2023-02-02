
import Main from "./dom/Main";
import getWeatherData from "./data";

async function createView() {
    const data = await getWeatherData("Cape Town");
    new Main(data);
}
createView();