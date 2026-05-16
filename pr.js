function convertPower() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const powerInput = parseFloat(document.getElementById('powerInput').value);
    const convertedPowerField = document.getElementById('convertedPower');

    let convertedPower;

    // Conversion logic
    switch (fromUnit) {
        case 'w':
            convertedPower = convertWattsTo(toUnit, powerInput);
            break;
        case 'kw':
            convertedPower = convertKilowattsTo(toUnit, powerInput);
            break;
        case 'mw':
            convertedPower = convertMegawattsTo(toUnit, powerInput);
            break;
        case 'hp':
            convertedPower = convertHorsepowerTo(toUnit, powerInput);
            break;
        case 'dbm':
            convertedPower = convertDBMTo(toUnit, powerInput);
            break;
        case 'cal/s':
            convertedPower = convertCaloriesPerSecondTo(toUnit, powerInput);
            break;
        case 'ft-lb/s':
            convertedPower = convertFootPoundsPerSecondTo(toUnit, powerInput);
            break;
        case 'btu/s':
            convertedPower = convertBTUPerSecondTo(toUnit, powerInput);
            break;
        default:
            convertedPower = 0;
            break;
    }

    // Display converted power
    convertedPowerField.value = convertedPower.toFixed(2); // Display up to 2 decimal places
}

// Example conversion functions (replace with actual conversion logic)
function convertWattsTo(toUnit, value) {
    switch (toUnit) {
        case 'w':
            return value;
        case 'kw':
            return value / 1000;
        case 'mw':
            return value / 1000000;
        case 'hp':
            return value * 0.00134102;
        case 'dbm':
            return 10 * Math.log10(value * 1000);
        case 'cal/s':
            return value * 0.238845;
        case 'ft-lb/s':
            return value * 0.737562;
        case 'btu/s':
            return value * 0.000947817;
        default:
            return 0;
    }
}

// Add similar conversion functions for other units as needed
function convertKilowattsTo(toUnit, value) {
    switch (toUnit) {
        case 'w':
            return value * 1000;
        case 'kw':
            return value;
        // Add other cases for conversion
        default:
            return 0;
    }
}

// Add more conversion functions for other units here
// ...
