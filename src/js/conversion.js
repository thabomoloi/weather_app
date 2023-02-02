/**
 * Convert from kelvin temperature to degree celsius
 * @param {number} kelvin Kelvin temperature
 * @returns Degree celsius value
 */
function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}
/**
 * Convert from kelvin temperature to degree fahrenheit
 * @param {number} kelvin Kelvin temperature
 * @returns Degree fahrenheit value
 */
function kelvinToFahrenheit(kelvin) {
    return Math.round((kelvin - 273.15) * 9 / 5 + 32);
}

export { kelvinToCelsius, kelvinToFahrenheit };