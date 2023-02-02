/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/conversion.js":
/*!******************************!*\
  !*** ./src/js/conversion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kelvinToCelsius\": () => (/* binding */ kelvinToCelsius),\n/* harmony export */   \"kelvinToFahrenheit\": () => (/* binding */ kelvinToFahrenheit)\n/* harmony export */ });\n/**\r\n * Convert from kelvin temperature to degree celsius\r\n * @param {number} kelvin Kelvin temperature\r\n * @returns Degree celsius value\r\n */\r\nfunction kelvinToCelsius(kelvin) {\r\n    return Math.round(kelvin - 273.15);\r\n}\r\n/**\r\n * Convert from kelvin temperature to degree fahrenheit\r\n * @param {number} kelvin Kelvin temperature\r\n * @returns Degree fahrenheit value\r\n */\r\nfunction kelvinToFahrenheit(kelvin) {\r\n    return Math.round((kelvin - 273.15) * 9 / 5 + 32);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather_app/./src/js/conversion.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ \"./src/js/conversion.js\");\n\r\n\r\nfunction getName(name) {\r\n    return name.trim()\r\n        .replace(/,\\s/g, \",\")\r\n        .replace(/\\s,/g, \",\")\r\n        .replace(/\\s/, \"+\")\r\n}\r\n\r\nfunction filterData(data) {\r\n    const regionNames = new Intl.DisplayNames(\r\n        ['en'], {type: 'region'}\r\n      );\r\n    \r\n    return {\r\n        name: data.name,\r\n        country: regionNames.of(data.sys.country),\r\n        icon: data.weather[0].icon,\r\n        description: data.weather[0].description,\r\n        temp: {\r\n            celsius: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(data.main.temp) + \"°C\",\r\n            fahrenheit: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(data.main.temp) + \"°F\"\r\n        },\r\n        feelsLike: {\r\n            celsius: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(data.main.feels_like) + \"°C\",\r\n            fahrenheit: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit)(data.main.feels_like) + \"°F\"\r\n        },\r\n        humidity: data.main.humidity + \"%\",\r\n        windSpeed: {\r\n            kmph: Math.round(data.wind.speed * 3.6) + \" km/h\",\r\n            mph: Math.round(data.wind.speed * 2.237) + \" mph\"\r\n        }\r\n    };\r\n}\r\n\r\nasync function getWeatherData(location) {\r\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getName(location)}&appid=f10b79e03b5de9d11241b8d0e6e46cd3`;\r\n    try {\r\n        const response = await fetch(url, { mode: \"cors\" });\r\n        if (!response.ok) {\r\n            alert(\"City Not Found\");\r\n            return null;\r\n        }\r\n        const weatherData = await response.json();\r\n        const data = filterData(weatherData);\r\n        return data;\r\n    }\r\n    catch (error) {\r\n        alert(error);\r\n        return null;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);\n\n//# sourceURL=webpack://weather_app/./src/js/data.js?");

/***/ }),

/***/ "./src/js/dom/Header.js":
/*!******************************!*\
  !*** ./src/js/dom/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Header {\r\n    constructor() {\r\n        this.header = document.createElement(\"header\");\r\n\r\n        this.searchDiv = document.createElement(\"div\");\r\n\r\n        this.searchInput = document.createElement(\"input\");\r\n        this.searchInput.classList.add(\"city-search\");\r\n        this.searchInput.placeholder = \"Enter A City\";\r\n\r\n        this.searchButton = document.createElement(\"button\");\r\n        this.searchButton.classList.add(\"btn-search\", \"btn\");\r\n        this.searchButton.innerText = \"SEARCH\";\r\n\r\n        this.searchDiv.append(this.searchInput, this.searchButton);\r\n        this.header.appendChild(this.searchDiv);\r\n\r\n        const body = document.querySelector(\"body\")\r\n        body.innerHTML = \"\";\r\n        body?.appendChild(this.header);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://weather_app/./src/js/dom/Header.js?");

/***/ }),

/***/ "./src/js/dom/Main.js":
/*!****************************!*\
  !*** ./src/js/dom/Main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/js/dom/Header.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ \"./src/js/data.js\");\n\r\n\r\n\r\nclass Main {\r\n\r\n    constructor(data) {\r\n\r\n        this.unit = \"C\";\r\n        this.header = new _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n        const main = document.createElement(\"main\");\r\n\r\n        const container = document.createElement(\"div\");\r\n        container.classList.add(\"container\");\r\n\r\n        // Info div: city name and weather description\r\n        const infoDiv = document.createElement(\"div\");\r\n\r\n        this.cityName = document.createElement(\"h1\");\r\n        this.cityName.innerText = data.name + \", \" + data.country;\r\n        this.cityName.classList.add(\"city-name\");\r\n\r\n        const description = document.createElement(\"p\");\r\n        description.innerText = data.description;\r\n        description.classList.add(\"weather-condition\");\r\n\r\n        infoDiv.append(this.cityName, description);\r\n\r\n        // Weather div\r\n        const weatherDiv = document.createElement(\"div\");\r\n        const weatherImg = document.createElement(\"img\");\r\n        weatherImg.src = `https://openweathermap.org/img/wn/${data.icon}@4x.png`;\r\n        weatherImg.classList.add(\"weather-icon\");\r\n\r\n        this.temperature = document.createElement(\"div\");\r\n        this.temperature.innerHTML = `<span>${data.temp.celsius}</span>`;\r\n\r\n        const deg = document.createElement(\"div\");\r\n        this.degC = document.createElement(\"button\");\r\n        this.degC.innerText = \"°C\";\r\n        this.degC.classList.add(\"display-deg\");\r\n\r\n        this.degF = document.createElement(\"button\");\r\n        this.degF.innerText = \"°F\";\r\n\r\n        deg.append(this.degC, this.degF);\r\n\r\n        this.details = document.createElement(\"div\");\r\n        this.details.classList.add(\"weather-details\");\r\n        this.details.innerHTML = `\r\n            <p>Feels like: ${data.feelsLike.celsius}</p>\r\n            <p>Humidty: ${data.humidity}</p>\r\n            <p>Wind: ${data.windSpeed.kmph}</p>\r\n        `;\r\n\r\n        this.degC.addEventListener(\"click\", () => {\r\n            this.temperature.innerHTML = `<span>${data.temp.celsius}</span>`;\r\n            this.details.innerHTML = `\r\n                <p>Feels like: ${data.feelsLike.celsius}</p>\r\n                <p>Humidty: ${data.humidity}</p>\r\n                <p>Wind: ${data.windSpeed.kmph}</p>\r\n            `;\r\n            this.degF.classList.remove(\"display-deg\");\r\n            this.degC.classList.add(\"display-deg\");\r\n            this.unit = \"C\";\r\n        });\r\n        this.degF.addEventListener(\"click\", () => {\r\n            this.temperature.innerHTML = `<span>${data.temp.fahrenheit}</span>`;\r\n            this.details.innerHTML = `\r\n                <p>Feels like: ${data.feelsLike.fahrenheit}</p>\r\n                <p>Humidty: ${data.humidity}</p>\r\n                <p>Wind: ${data.windSpeed.mph}</p>\r\n            `;\r\n            this.degC.classList.remove(\"display-deg\");\r\n            this.degF.classList.add(\"display-deg\");\r\n            this.unit = \"F\";\r\n        });\r\n\r\n        weatherDiv.append(weatherImg, this.temperature, deg, this.details);\r\n        main.append(infoDiv, weatherDiv);\r\n        document.querySelector(\"body\")?.appendChild(main);\r\n\r\n    }\r\n    displayNewData(data) {\r\n        if (data) {\r\n            this.cityName.innerText = data.name + \", \" + data.country;\r\n            if (this.degC.classList.contains(\"display-deg\")) {\r\n                this.temperature.innerHTML = `<span>${data.temp.celsius}</span>`;\r\n                this.details.innerHTML = `\r\n                    <p>Feels like: ${data.feelsLike.celsius}</p>\r\n                    <p>Humidty: ${data.humidity}</p>\r\n                    <p>Wind: ${data.windSpeed.kmph}</p>\r\n                `;\r\n            } else {\r\n                this.temperature.innerHTML = `<span>${data.temp.fahrenheit}</span>`;\r\n                this.details.innerHTML = `\r\n                    <p>Feels like: ${data.feelsLike.fahrenheit}</p>\r\n                    <p>Humidty: ${data.humidity}</p>\r\n                    <p>Wind: ${data.windSpeed.mph}</p>\r\n                `;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://weather_app/./src/js/dom/Main.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/Main */ \"./src/js/dom/Main.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n\r\n\r\n\r\n\r\nasync function createView() {\r\n    var data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Cape Town\");\r\n    const mainView = new _dom_Main__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n\r\n    const btnSearch = document.querySelector(\"button.btn-search\");\r\n    const searchText = document.querySelector(\"input.city-search\");\r\n\r\n    if (btnSearch && searchText) {\r\n        btnSearch.addEventListener(\"click\", async () => {\r\n            data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(searchText.value);\r\n            mainView.displayNewData(data);\r\n            searchText.value = \"\";\r\n        });\r\n    }\r\n}\r\ncreateView();\n\n//# sourceURL=webpack://weather_app/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;