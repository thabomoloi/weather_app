
import Main from "./dom/Main";
import getWeatherData from "./data";

async function createView() {
    var data = await getWeatherData("Cape Town");
    const mainView = new Main(data);

    const btnSearch = document.querySelector("button.btn-search");
    const searchText = document.querySelector("input.city-search");

    if (btnSearch && searchText) {
        btnSearch.addEventListener("click", async () => {
            data = await getWeatherData(searchText.value);
            mainView.displayNewData(data);
            searchText.value = "";
        });
    }
}
createView();