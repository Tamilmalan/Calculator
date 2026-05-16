function convertSpeed() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const speedInput = parseFloat(document.getElementById('speedInput').value);
    const convertedSpeedField = document.getElementById('convertedSpeed');

    if (isNaN(speedInput)) {
        alert('Please enter a valid number');
        return;
    }

    let speedInMetersPerSecond;

    // Convert input speed to meters per second
    switch (fromUnit) {
        case 'c':
            speedInMetersPerSecond = speedInput * 299792458;
            break;
        case 'km/s':
            speedInMetersPerSecond = speedInput * 1000;
            break;
        case 'mph':
            speedInMetersPerSecond = speedInput * 0.44704;
            break;
        case 'ma':
            speedInMetersPerSecond = speedInput * 343;
            break;
        case 'in/s':
            speedInMetersPerSecond = speedInput * 0.0254;
            break;
        case 'm/s':
            speedInMetersPerSecond = speedInput;
            break;
        case 'km/h':
            speedInMetersPerSecond = speedInput * 0.277778;
            break;
        default:
            speedInMetersPerSecond = 0;
            break;
    }

    let convertedSpeed;

    // Convert meters per second to the target unit
    switch (toUnit) {
        case 'c':
            convertedSpeed = speedInMetersPerSecond / 299792458;
            break;
        case 'km/s':
            convertedSpeed = speedInMetersPerSecond / 1000;
            break;
        case 'mph':
            convertedSpeed = speedInMetersPerSecond / 0.44704;
            break;
        case 'ma':
            convertedSpeed = speedInMetersPerSecond / 343;
            break;
        case 'in/s':
            convertedSpeed = speedInMetersPerSecond / 0.0254;
            break;
        case 'm/s':
            convertedSpeed = speedInMetersPerSecond;
            break;
        case 'km/h':
            convertedSpeed = speedInMetersPerSecond / 0.277778;
            break;
        default:
            convertedSpeed = 0;
            break;
    }

    // Display converted speed
    convertedSpeedField.value = convertedSpeed.toFixed(2); // Display up to 2 decimal places
}
