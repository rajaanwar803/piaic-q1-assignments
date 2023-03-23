
const myPrompt = require('prompt-sync')();


function add(num1: number, num2: number): number {
    return num1 + num2;
}

function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function divide(num1: number, num2: number): number {
    return num1 / num2;
}


let firstNum = myPrompt("Enter first number: ");
let operation = myPrompt("Enter your operation (+ - * /): ");
let secondNum = myPrompt("Enter second number: ");

firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum);

if (operation == "+") {
    let result = add(firstNum, secondNum)
    console.log(`Result: ${firstNum} + ${secondNum} = ${result}`);
}
else if (operation == "-") {
    let result = subtract(firstNum, secondNum)
    console.log(`Result: ${firstNum} - ${secondNum} = ${result}`);
}
else if (operation == "*") {
    let result = multiply(firstNum, secondNum)
    console.log(`Result: ${firstNum} * ${secondNum} = ${result}`);
}
else if (operation == "/") {
    let result = divide(firstNum, secondNum)
    console.log(`Result: ${firstNum} / ${secondNum} = ${result}`);
}

