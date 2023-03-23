var myPrompt = require('prompt-sync')();
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
var firstNum = myPrompt("Enter first number: ");
var operation = myPrompt("Enter your operation (+ - * /): ");
var secondNum = myPrompt("Enter second number: ");
firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum);
if (operation == "+") {
    var result = add(firstNum, secondNum);
    console.log("Result: ".concat(firstNum, " + ").concat(secondNum, " = ").concat(result));
}
else if (operation == "-") {
    var result = subtract(firstNum, secondNum);
    console.log("Result: ".concat(firstNum, " - ").concat(secondNum, " = ").concat(result));
}
else if (operation == "*") {
    var result = multiply(firstNum, secondNum);
    console.log("Result: ".concat(firstNum, " * ").concat(secondNum, " = ").concat(result));
}
else if (operation == "/") {
    var result = divide(firstNum, secondNum);
    console.log("Result: ".concat(firstNum, " / ").concat(secondNum, " = ").concat(result));
}
