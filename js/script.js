let display = document.querySelector("#display");
let operator = "";
let reset = false;
let firstNumber = 0;
function press(number) {
    if (reset) {
        display.innerText = 0;
        reset = false;
    }
    if (display.innerText == "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
    console.log(display.innerText);
}
function setOP(op) {
    firstNumber = display.innerText;
    operator = op;
    reset = true;
}
function calculate() {
    let resultado;
    switch (operator) {
        case "+":
            resultado = parseFloat(firstNumber) + parseFloat(display.innerText);
            break;
        case "-":
            resultado = parseFloat(firstNumber) - parseFloat(display.innerText);
            break;
        case "*":
            resultado = parseFloat(firstNumber) * parseFloat(display.innerText);
            break;
        case "/":
            resultado = parseFloat(firstNumber) / parseFloat(display.innerText);
            break;
    }
    display.innerText = resultado;
    reset = true;
}
function clr() {
    display.innerText = "0";
    operator = "";
    firstNumber = 0;
}
