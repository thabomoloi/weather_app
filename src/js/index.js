import "../css/style.css";

import Main from "./dom/Main";
import getWeatherData from "./data";



async function createView(name) {
    var data = await getWeatherData(name);
    var mainView = new Main(data);

    const btnSearch = document.querySelector("button.btn-search");
    const searchText = document.querySelector("input.city-search");

    if (btnSearch && searchText) {

        btnSearch.addEventListener("click", () => {
            createView(searchText.value).then(function () {
                searchText.value = "";
            }).catch(function (error) {
                createView("Cape Town");
            });
        });
    }
}


createView("Cape Town");

