/*
1. Smallest of Three Numbers

Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.
*/

function smallestNumber(a, b, c) {
    return Math.min(a, b, c);
}
//smallestNumber(2, 2, 2);

/*
2. Add and Subtract

You will receive three integer numbers.

Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.
*/

function addAndSubtract(a, b, c) {
    let sum = (a, b) => {
        return a + b;
    };

    let substract = (sum, c) => {
        return sum - c;
    }

    return substract(sum(a, b), c);
}
//addAndSubtract(2, 3, 1);

/*
3. Characters in Range

Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
*/

function charInRange(firstChar, secondChar) {

    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let result = "";

    for (let index = start + 1; index < end; index++) {

        const currentGhar = String.fromCharCode(index);
        result += `${currentGhar} `;
    }

    console.log(result.trimEnd());
}
//charInRange('m', 'a');

/*
4. Odd and Even Sum

You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
*/

function sumOfOddAndEvenDigitInNumber(number) {

    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {

        let digit = number % 10;
        number = Math.floor(number / 10);

        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
//sumOfOddAndEvenDigitInNumber(1234);


/*
5. Palindrome Integers

A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

Output

· If the current integer is a palindrome, print: "true"
· Otherwise, print: "false"
*/

function palindromCheck(array) {

    function isPalindrom(number) {

        let nuberAsString = number.toString();
        let reversedNumber = nuberAsString.split('').reverse().join('');

        return reversedNumber === nuberAsString;
    }

    for (const currentNumber of array) {
        console.log(isPalindrom(currentNumber));
    }
}
//palindromCheck([123, 323, 421, 121, 2, 1111]);

/*
6. Password Validator

Write a function that checks if a given password is valid. Password validations are:

· The length should be 6 - 10 characters (inclusive)
· It should consist only of letters and digits
· It should have at least 2 digits

If a password is a valid print: "Password is valid".

If it is NOT valid, for every unfulfilled rule print a message:

· "Password must be between 6 and 10 characters"
· "Password must consist only of letters and digits"
· "Password must have at least 2 digits"
*/

function passwordValidator(password) {

    let isValid = true;

    function isValidLenght(text) {
        return text.length >= 6 && text.length <= 10;
    }

    function lettersAndDigitsCheck(text) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(text);
    }

    function checkForTwoDigits(text) {
        const regex = /\d.*\d/;
        return regex.test(text);
    }

    if (!isValidLenght(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!lettersAndDigitsCheck(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (!checkForTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}
//passwordValidator("12Pass123");

/*
7. NxN Matrix

Write a function that receives a single integer number n and prints nxn matrix with that number.
*/

function printMatrix(number) {

    function singleRow(number) {
        return (number.toString() + " ").repeat(number);
    }

    for (let rows = 0; rows < number; rows++) {
        console.log(singleRow(number));
    }
}
//printMatrix(3);

/*
8. Perfect Number

Write a function that receives a number and checks if that number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

Output

· If the number is perfect, print: "We have a perfect number!"
· Otherwise, print: "It's not so perfect."

Hint

Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself)
 => 6 is a perfect number because it is the sum of 1 + 2 + 3 (all of which are divided without residue). 
· Read about the Perfect number here: https://en.wikipedia.org/wiki/Perfect_number
*/

function perfectNumber(number) {

    let sum = 0;

    for (let index = 1; index < number; index++) {
        if (number % index === 0) {
            sum += index;
        }
    }

    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
//perfectNumber(28); // yes

/*
9. Loading Bar

You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).

Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
*/

function loadingBar(number) {
    if (number === 100) {
        console.log("100% Complete!");
    } else {
        console.log(`${number}% [${'%'.repeat(number / 10) + '.'.repeat(10 - (number / 10))}]`);
        console.log("Still loading...");
    }
}
//loadingBar(30);

/*
10. Factorial Division

Write a function that receives two integer numbers.
Calculate the factorial of each number.
Divide the first result by the second and print the division formatted to the second decimal point.

*/

function factorialDivision(a, b) {

    function factorial(number) {
        if (number < 2) {
            return number;
        }
        return number * factorial(number - 1);
    }

    console.log(factorial(a) / factorial(b));
}
factorialDivision(5, 2);