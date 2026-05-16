function convertTemperature() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const convertedTemperatureField = document.getElementById('convertedTemperature');

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number');
        return;
    }

    let temperatureInCelsius;

    // Convert input temperature to Celsius
    switch (fromUnit) {
        case 'C':
            temperatureInCelsius = temperatureInput;
            break;
        case 'F':
            temperatureInCelsius = (temperatureInput - 32) * 5 / 9;
            break;
        case 'K':
            temperatureInCelsius = temperatureInput - 273.15;
            break;
        case 'R':
            temperatureInCelsius = (temperatureInput - 491.67) * 5 / 9;
            break;
        case 'Re':
            temperatureInCelsius = temperatureInput * 1.25;
            break;
        default:
            temperatureInCelsius = 0;
            break;
    }

    let convertedTemperature;

    // Convert Celsius to the target unit
    switch (toUnit) {
        case 'C':
            convertedTemperature = temperatureInCelsius;
            break;
        case 'F':
            convertedTemperature = (temperatureInCelsius * 9 / 5) + 32;
            break;
        case 'K':
            convertedTemperature = temperatureInCelsius + 273.15;
            break;
        case 'R':
            convertedTemperature = (temperatureInCelsius + 273.15) * 9 / 5;
            break;
        case 'Re':
            convertedTemperature = temperatureInCelsius * 0.8;
            break;
        default:
            convertedTemperature = 0;
            break;
    }

    // Display converted temperature
    convertedTemperatureField.value = convertedTemperature.toFixed(2); // Display up to 2 decimal places
}
