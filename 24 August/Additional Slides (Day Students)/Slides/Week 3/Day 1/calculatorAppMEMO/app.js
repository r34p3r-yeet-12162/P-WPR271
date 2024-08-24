document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let secondOperand = null;

    // Function to handle button clicks
    function handleButtonClick(event) {
        const value = event.target.getAttribute('data-value');

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            firstOperand = parseFloat(currentInput);
            currentInput = '';
        } else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    }

    // Function to update the display
    function updateDisplay(value) {
        display.value = value;
    }

    // Function to clear the display
    function clearDisplay() {
        currentInput = '';
        operator = '';
        firstOperand = null;
        secondOperand = null;
        updateDisplay('');
    }

    // Function to perform the calculation
    function calculateResult() {
        secondOperand = parseFloat(currentInput);
        let result = 0;
        if (operator === '+') {
            result = firstOperand + secondOperand;
        } else if (operator === '-') {
            result = firstOperand - secondOperand;
        } else if (operator === '*') {
            result = firstOperand * secondOperand;
        } else if (operator === '/') {
            result = firstOperand / secondOperand;
        }
        updateDisplay(result);
        currentInput = result.toString();
        firstOperand = null;
        operator = '';
    }

    // Attach event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
