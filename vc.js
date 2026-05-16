function convertVolume() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const volumeInput = parseFloat(document.getElementById('volumeInput').value);
    const convertedVolumeField = document.getElementById('convertedVolume');

    if (isNaN(volumeInput)) {
        alert('Please enter a valid number');
        return;
    }

    let volumeInLiters;

    // Convert input volume to liters
    switch (fromUnit) {
        case 'hl':
            volumeInLiters = volumeInput * 100;
            break;
        case 'm3':
            volumeInLiters = volumeInput * 1000;
            break;
        case 'cm3':
            volumeInLiters = volumeInput * 0.001;
            break;
        case 'dl':
            volumeInLiters = volumeInput * 0.1;
            break;
        case 'cl':
            volumeInLiters = volumeInput * 0.01;
            break;
        case 'dm3':
            volumeInLiters = volumeInput;
            break;
        case 'l':
            volumeInLiters = volumeInput;
            break;
        case 'mm3':
            volumeInLiters = volumeInput * 1e-6;
            break;
        case 'ml':
            volumeInLiters = volumeInput * 0.001;
            break;
        default:
            volumeInLiters = 0;
            break;
    }

    let convertedVolume;

    // Convert liters to the target unit
    switch (toUnit) {
        case 'hl':
            convertedVolume = volumeInLiters * 0.01;
            break;
        case 'm3':
            convertedVolume = volumeInLiters * 0.001;
            break;
        case 'cm3':
            convertedVolume = volumeInLiters * 1000;
            break;
        case 'dl':
            convertedVolume = volumeInLiters * 10;
            break;
        case 'cl':
            convertedVolume = volumeInLiters * 100;
            break;
        case 'dm3':
            convertedVolume = volumeInLiters;
            break;
        case 'l':
            convertedVolume = volumeInLiters;
            break;
        case 'mm3':
            convertedVolume = volumeInLiters * 1e6;
            break;
        case 'ml':
            convertedVolume = volumeInLiters * 1000;
            break;
        default:
            convertedVolume = 0;
            break;
    }

    // Display converted volume
    convertedVolumeField.value = convertedVolume.toFixed(2); // Display up to 2 decimal places
}
