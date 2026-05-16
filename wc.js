function convertWeight() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const weightInput = parseFloat(document.getElementById('weightInput').value);
    const convertedWeightField = document.getElementById('convertedWeight');

    if (isNaN(weightInput)) {
        alert('Please enter a valid number');
        return;
    }

    let weightInGrams;

    // Convert input weight to grams
    switch (fromUnit) {
        case 'g':
            weightInGrams = weightInput;
            break;
        case 'microgram':
            weightInGrams = weightInput * 1e-6;
            break;
        case 'q':
            weightInGrams = weightInput * 100000;
            break;
        case 'ct':
            weightInGrams = weightInput * 0.2;
            break;
        case 't':
            weightInGrams = weightInput * 1e6;
            break;
        case 'mg':
            weightInGrams = weightInput * 0.001;
            break;
        case 'kg':
            weightInGrams = weightInput * 1000;
            break;
        default:
            weightInGrams = 0;
            break;
    }

    let convertedWeight;

    // Convert grams to the target unit
    switch (toUnit) {
        case 'g':
            convertedWeight = weightInGrams;
            break;
        case 'microgram':
            convertedWeight = weightInGrams * 1e6;
            break;
        case 'q':
            convertedWeight = weightInGrams / 100000;
            break;
        case 'ct':
            convertedWeight = weightInGrams / 0.2;
            break;
        case 't':
            convertedWeight = weightInGrams / 1e6;
            break;
        case 'mg':
            convertedWeight = weightInGrams / 0.001;
            break;
        case 'kg':
            convertedWeight = weightInGrams / 1000;
            break;
        default:
            convertedWeight = 0;
            break;
    }

    // Display converted weight
    convertedWeightField.value = convertedWeight.toFixed(2); // Display up to 2 decimal places
}
