function convertPressure() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const pressureInput = parseFloat(document.getElementById('pressureInput').value);
    const convertedPressureField = document.getElementById('convertedPressure');

    let convertedPressure;

    // Conversion logic
    switch (fromUnit) {
        case 'mmh2o':
            convertedPressure = convertMMH2OTo(toUnit, pressureInput);
            break;
        case 'psf':
            convertedPressure = convertPSFTo(toUnit, pressureInput);
            break;
        case 'kgfcm2':
            convertedPressure = convertKGFcm2To(toUnit, pressureInput);
            break;
        case 'psi':
            convertedPressure = convertPSITo(toUnit, pressureInput);
            break;
        case 'mmhg':
            convertedPressure = convertMMHgTo(toUnit, pressureInput);
            break;
        case 'bar':
            convertedPressure = convertBarTo(toUnit, pressureInput);
            break;
        case 'inhg':
            convertedPressure = convertInHgTo(toUnit, pressureInput);
            break;
        case 'mbar':
            convertedPressure = convertMillibarTo(toUnit, pressureInput);
            break;
        case 'hpa':
            convertedPressure = convertHectopascalTo(toUnit, pressureInput);
            break;
        case 'atm':
            convertedPressure = convertAtmosphereTo(toUnit, pressureInput);
            break;
        case 'kpa':
            convertedPressure = convertKilopascalTo(toUnit, pressureInput);
            break;
        case 'mpa':
            convertedPressure = convertMegapascalTo(toUnit, pressureInput);
            break;
        case 'kgfm2':
            convertedPressure = convertKGFm2To(toUnit, pressureInput);
            break;
        default:
            convertedPressure = 0;
            break;
    }

    // Display converted pressure
    convertedPressureField.value = convertedPressure.toFixed(2); // Display up to 2 decimal places
}

// Example conversion functions (replace with actual conversion logic)
function convertMMH2OTo(toUnit, value) {
    switch (toUnit) {
        case 'mmh2o':
            return value;
        case 'psf':
            return value * 0.578703;
        case 'kgfcm2':
            return value * 0.0000101972;
        case 'psi':
            return value * 0.0142233;
        case 'mmhg':
            return value * 0.73556;
        case 'bar':
            return value * 0.0000980665;
        case 'inhg':
            return value * 0.028959;
        case 'mbar':
            return value * 0.0980665;
        case 'hpa':
            return value * 0.0980665;
        case 'atm':
            return value * 0.0000979215;
        case 'kpa':
            return value * 0.0980665;
        case 'mpa':
            return value * 0.0000980665;
        case 'kgfm2':
            return value * 0.0101972;
        default:
            return 0;
    }
}

// Add similar conversion functions for other units as needed
function convertPSFTo(toUnit, value) {
    switch (toUnit) {
        case 'mmh2o':
            return value * 1.729994;
        case 'psf':
            return value;
        case 'kgfcm2':
            return value * 0.0000178829;
        case 'psi':
            return value * 0.00694444;
        case 'mmhg':
            return value * 0.491154;
        case 'bar':
            return value * 0.0000145038;
        case 'inhg':
            return value * 0.53524;
        case 'mbar':
            return value * 0.0145038;
        case 'hpa':
            return value * 0.0145038;
        case 'atm':
            return value * 0.0000144916;
        case 'kpa':
            return value * 0.0145038;
        case 'mpa':
            return value * 0.0000145038;
        case 'kgfm2':
            return value * 0.00148816;
        default:
            return 0;
    }
}

// Add more conversion functions for other units here
// ...
