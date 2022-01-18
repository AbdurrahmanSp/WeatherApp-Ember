// kelvin to celsius func
export const kelvinToCelsius = (value) => {
    const celsius = value - 273.15;

    return Math.round(celsius);
}