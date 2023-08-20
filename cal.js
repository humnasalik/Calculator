let input = "";
let operator = "";
let operand1 = null;
let operand2 = null;

function displayvalue(value) {
    if (value === "+" || value === "-" || value === "x" || value === "/" || value ==="^") {
        if (input !== "") {
            operand1 = parseFloat(input);
            operator = value;
            input = "";
        }
    } else {
        input += value;
    }
    updateDisplay();
}

function calculate() {
    if (input !== "") {
        operand2 = parseFloat(input);
        if (operator === "+") {
            input = (operand1 + operand2).toString();
        }
         else if (operator === "-") {
            input = (operand1 - operand2).toString();
        }
         else if (operator === "x") {
            input = (operand1 * operand2).toString();
        }
         else if ( operator==="^"){
           input=(operand1**operand2).toString()
         }
         else if (operator === "/") {
            if (operand2 !== 0) {
                input = (operand1 / operand2).toString();
            } else {
                input = "Error";
            }
        }
        operand1 = null;
        operand2 = null;
        operator = "";
        updateDisplay();
    }
}

function clearall() {
    input = "";
    operand1 = null;
    operand2 = null;
    operator = "";
    updateDisplay();
}    
function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.value = input;
}




