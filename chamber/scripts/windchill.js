function calculateWindChill(temperature, windspeed) {
    if (temperature <= 50 && windspeed > 3.0) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}


function updateWindChill(temperature, windspeed) {

    const windChill = calculateWindChill(temperature, windspeed);
    return windChill;
}
