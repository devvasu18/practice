let currentInput = "";
let previousInput = "";
let operator = null;

const display = document.getElementById("display");

function appendNumber(number) {
    if (currentInput === "0") currentInput = ""; // Avoid leading zeros
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === "") return; // Prevent setting operator without a number
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (currentInput === "" || previousInput === "") return;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    let result;
    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || "0";
}
