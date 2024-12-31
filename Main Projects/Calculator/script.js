// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to append a character to the display
function appendToDisplay(char) {
    const display = document.getElementById('display');
    display.value += char;
}

// Function to safely evaluate the expression
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}