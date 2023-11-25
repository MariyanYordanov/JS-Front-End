/*
3. Sum Numbers

Write a JS function that reads two numbers from input fields in a web page and puts their sum in another field when the user clicks on a button.

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function calc() {
    const firstNumber = Number(document.getElementById("num1").value);
    const secondNumber = Number(document.getElementById("num2").value);
    document.getElementById("sum").value = firstNumber + secondNumber;
}
