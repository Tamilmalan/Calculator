// Clears the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Deletes the last character from the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Appends a character to the display
function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

// Calculates the result and updates the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Toggles the visibility of advanced functions
function toggleAdvancedFunctions() {
    const advancedButtons = document.querySelector('.advanced-buttons');
    advancedButtons.classList.toggle('hidden');
}

// Calculates factorial
function calculateFactorial() {
    const display = document.getElementById('display');
    const num = parseInt(display.value);
    if (isNaN(num) || num < 0) {
        display.value = 'Error';
        return;
    }
    display.value = factorial(num);
}

// Helper function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Add event listeners to ensure input is filtered for numbers only
document.getElementById('display').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.()+\-*/^%eEπ√]/g, '');
});
