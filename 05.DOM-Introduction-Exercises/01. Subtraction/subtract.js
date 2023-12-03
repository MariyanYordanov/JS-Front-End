/*
1. Subtraction

An HTML page holds two text fields with ids "firstNumber" and "secondNumber". 
Write a function to subtract the values from these text fields and display the result in the div named "result".

HTML and JavaScript Code

Implement the above to provide the following functionality:

· Your function should take the values of "firstNumber" and "secondNumber", convert them to numbers, subtract the first number from the second one and then append the result to the <div> with id="result".
· Your function should be able to work with any 2 numbers in the inputs, not only the ones given in the example.
*/

function subtract() {

    const firstElement = Number(document.getElementById("firstNumber").value);
    const secondElement = Number(document.getElementById("secondNumber").value);
    const result = secondElement - firstElement;
    document.getElementById("result").textContent = result;
}