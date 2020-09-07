let firstValue = 0;
let secondValue = 0;
let totalValue = 0;
let signValue = "";
let flag = 0;
let valueOnDisplay = String(0);

function add(a, b) {
    return Number(a) + Number(b)
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) {
        return "Error"
    } else {
        return a / b
    }

}

function operate(operator, a, b) {
    if (operator == "+") {
        firstValue = add(a, b)
        flag = 1;
        return firstValue
    } else if (operator == "-") {
        firstValue = substract(a, b)
        flag = 1;
        return firstValue
    } else if (operator == "*") {
        firstValue = multiply(a, b)
        flag = 1;
        return firstValue
    } else if (operator == "/") {
        firstValue = divide(a, b)
        flag = 1;
        return firstValue
    }
}

// de repente hacer una funcion que simplemente hada add de todo lo ingresado
function displayValue(num) {
    let display = document.querySelector("input");

    if (flag == 1) {
        flag = 0;
        display.value = 0;
    }

    valueOnDisplay = String(display.value) + String(num);
    //display.value = parseFloat(valueOnDisplay);
    (valueOnDisplay.charAt(0) + valueOnDisplay.charAt(1)) == '0.' ? display.value = valueOnDisplay : display.value = parseFloat(valueOnDisplay)
}

function clear() {
    document.querySelector("input").value = 0;
    valueOnDisplay = 0;
    firstValue = 0;
    secondValue = 0;
    sign = "";
}

function positiveNegative() {
    let display = document.querySelector("input");
    let changeSign = display.value;
    display.value = -changeSign;
}

function perc() {
    let display = document.querySelector("input");
    let divide100 = display.value;
    display.value = divide100 / 100;
}

function decimal() {
    let display = document.querySelector("input");
    if (display.value.charAt(1) != ".") {
        display.value = display.value + "."
    }
}

function enteredValue(sign) {
    let display = document.querySelector("input");
    let inputNumber = display.value;
    if (firstValue == 0 && signValue == '') {
        firstValue = inputNumber;
        signValue = sign;
        flag = 1;
    } else {
        secondValue = inputNumber;
        (signValue != "") ? display.value = operate(signValue, firstValue, secondValue) : firstValue = display.value
        signValue = sign;
        if (signValue == "=") {
            firstValue = display.value;
            signValue = "";
        }
    }

}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("input").value = valueOnDisplay;
    document.querySelector("#clear").addEventListener("click", clear)
    document.querySelector("#posneg").addEventListener("click", positiveNegative)
    document.querySelector("#percentage").addEventListener("click", perc)
    document.querySelector("#divide").addEventListener("click", () => enteredValue("/"))
    document.querySelector("#seven").addEventListener("click", function () { displayValue(7) })
    document.querySelector("#eight").addEventListener("click", function () { displayValue(8) })
    document.querySelector("#nine").addEventListener("click", function () { displayValue(9) })
    document.querySelector("#mult").addEventListener("click", () => enteredValue("*"))
    document.querySelector("#four").addEventListener("click", function () { displayValue(4) })
    document.querySelector("#five").addEventListener("click", function () { displayValue(5) })
    document.querySelector("#six").addEventListener("click", function () { displayValue(6) })
    document.querySelector("#minus").addEventListener("click", () => enteredValue("-"))
    document.querySelector("#one").addEventListener("click", function () { displayValue(1) })
    document.querySelector("#two").addEventListener("click", function () { displayValue(2) })
    document.querySelector("#three").addEventListener("click", function () { displayValue(3) })
    document.querySelector("#plus").addEventListener("click", () => enteredValue("+"))
    document.querySelector("#dot").addEventListener("click", decimal)
    document.querySelector("#zero").addEventListener("click", function () { displayValue(0) })
    document.querySelector("#equal").addEventListener("click", () => enteredValue("="))
    
})

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 46) {clear()}
    else if (e.keyCode == 80) {positiveNegative()}
    else if (e.keyCode == 72) {perc()}
    else if (e.keyCode == 111) {enteredValue("/")}
    else if (e.keyCode == 55 || e.keyCode == 103) {displayValue(7)}
    else if (e.keyCode == 56 || e.keyCode == 104) {displayValue(8)}
    else if (e.keyCode == 57 || e.keyCode == 105) {displayValue(9)}
    else if (e.keyCode == 106) {enteredValue("*")}
    else if (e.keyCode == 52 || e.keyCode == 100) {displayValue(4)}
    else if (e.keyCode == 53 || e.keyCode == 101) {displayValue(5)}
    else if (e.keyCode == 54 || e.keyCode == 102) {displayValue(6)}
    else if (e.keyCode == 109 || e.keyCode == 173) {enteredValue("-")}
    else if (e.keyCode == 97 || e.keyCode == 49) {displayValue(1)}
    else if (e.keyCode == 98 || e.keyCode == 50) {displayValue(2)}
    else if (e.keyCode == 99 || e.keyCode == 51) {displayValue(3)}
    else if (e.keyCode == 107 || e.keyCode == 171 ) {enteredValue("+")}
    else if (e.keyCode == 110) {decimal()}
    else if (e.keyCode == 48 || e.keyCode == 96 ) {displayValue(0)}
    else if (e.keyCode == 13) {enteredValue("=")}
})
