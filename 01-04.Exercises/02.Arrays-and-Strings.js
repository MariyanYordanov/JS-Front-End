
/*1. Array Rotation

Write a function that receives an array and the number of rotations you have to perform.
Note: Depending on the number of rotations, the first element goes to the end.*/

function arrayString(array, rotations) {
    for (let index = 0; index < rotations; index++) {
        array.push(array.shift());
    }
    console.log(array.join(' '));
}
// arrayString([51, 47, 32, 61, 21], 2);

/*
2. Print Every N-th Element from an Array

The input comes as two parameters – an array of strings and a number. 
The second parameter is N – the step.
The output is every element on the N-th step starting from the first one. 
If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array.
The output is the return value of your function and must be an array. 
*/

function everyN(array, step) {

    let outputArray = [];
    let arrLength = array.length;

    for (let index = 0; index < arrLength; index += step) {
        outputArray.push(array[index]);
    }

    return outputArray;
}
// everyN(['1', '2', '3', '4', '5'], 2);

/*
3. List of Names

You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
 */

function names(list) {

    list.sort();

    for (let index = 0; index < array.length; index++) {
        let element = `${index + 1}.${array[index]}`;
        console.log(element);
    }
}
// names(["Bob", "An", "Clint"]);

/*
4. Sorting Numbers

Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.
Return the resulting array.
*/

function sortedNumbers(numbers) {

    // numbers.sort((a, b) => {
    //     return a - b;
    // }); - the same like => numbers.sort();

    numbers.sort();

    let outputArray = [];
    let length = numbers.length / 2;
    let last;

    if (length % 2 !== 0) {
        last = outputArray.pop();
        length = (numbers.length - 1) / 2;
    }

    for (let index = 0; index < length; index++) {
        outputArray.push(numbers.shift());
        outputArray.push(numbers.pop());
    }

    if (last) {
        outputArray.push(last);
    }

    console.log(outputArray);
}
// sortedNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]);

/*
5. Reveal Words

Write a function, which receives two parameters.
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string that contains templates containing '*'.
Find the word with the same length as the template and replace it.
*/

function revealWord(words, text) {

    let wordsArray = words.split(", ");
    let textArray = text.split(" ");

    for (let i = 0; i < wordsArray.length; i++) {

        for (let j = 0; j < textArray.length; j++) {

            let isMatch = textArray[j].includes('*') && textArray[j].length === wordsArray[i].length;

            if (isMatch) {
                textArray[j] = wordsArray[i];
            }
        }
    }

    console.log(textArray.join(' '));
}
// revealWord('great', 'softuni is ***** place for learning new programming languages');

/*
6. Modern Times of #(HashTag)

The input will be a single string.
Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.
Finally, print out all the special words you found without the label (#) on a new line.
*/

function nowadays(text) {

    let regExp = new RegExp('#[A-Za-z]+', 'g');
    let maches = text.match(regExp);

    for (let word of maches) {
        word = word.replace('#', '');
        console.log(word);
    }
}
// nowadays('Nowadays everyone uses # to tag a #special word in #socialMedia');

/*
7. String Substring
The input will be given as two separated strings (a word as a first parameter and a text as a second).
Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program.
If you don't find the word print: "{word} not found!"
*/

function stringSubstring(word, text) {

    const wordToLower = word.toLowerCase();
    const testToLower = text.toLowerCase();

    if (testToLower.includes(wordToLower)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
// stringSubstring('javascript', 'JavaScript is the best programming language');

/*
8. Pascal-Case Splitter

You will receive a single string.
This string is written in PascalCase format. Your task here is to split this string by every word in it.
Print them joined by comma and space.
*/

function pascalCase(text) {
    console.log(text.split(/(?=[A-Z])/).join(", "));
}
// pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');


// More Exercises
/*
1. Login

You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console: "Incorrect password. Try again.". When you receive the correct password print: "User {username} logged in."

However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program.

The input comes as an array of strings - the first string represents username and each subsequent string is a password.
*/

function login(array) {

    const username = array[0];
    const password = username.split('').reverse().join('');

    for (let index = 1; index < array.length; index++) {

        if (array[index] !== password) {

            console.log("Incorrect password. Try again.");

            if (index === 3) {

                console.log(`User ${username} blocked!`);
                break;
            }

        } else {

            console.log(`User ${username} logged in.`);
            break;
        }
    }
}
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'notsunny']);

/*
2. * Bitcoin "Mining"

Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. Your shift consists of a certain number of days where you mine an amount of gold in grams. Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices:

1 Bitcoin -> 11949.16 lv.

1 g of gold -> 67.51 lv.

Input

You will receive an array of numbers, representing your shift at the mine.

Output

Print on the console these lines in the following formats:

· First-line prints the total amount of bought bitcoins:

`Bought bitcoins: {count}`

· Second-line prints which day you bought your first bitcoin:

`Day of the first purchased bitcoin: {day}`

In case you did not purchase any bitcoins, do not print the second line.

· Third-line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:

`Left money: {money} lv.`

Constraints

· The input array may contain up to 1,000 elements

· The numbers in the array are in the range [0.01..5,000.00] inclusive

· Allowed time/memory: 100ms/16MB
*/

function buyFirstBitcoin(shifts) {

    const oneBitcoin = 11949.16;
    const oneGramOfGold = 67.51;
    let totalAmountOfMoney = 0;
    let daysCounter = 0;

    for (let i = 0; i < shifts.length; i++) {

        const goldPerShift = shifts[i];
        let moneyPerShift = oneGramOfGold * goldPerShift;

        if ((i + 1) % 3 === 0) {
            moneyPerShift *= 0.7;
        }

        totalAmountOfMoney += moneyPerShift;

        if (new Number(totalAmountOfMoney.toFixed(2)) >= oneBitcoin
            && daysCounter === 0) {
            daysCounter = i + 1;
        }
    }

    const amaountOfBitcoins = totalAmountOfMoney / oneBitcoin;
    const boughtBitcoins = Math.trunc(amaountOfBitcoins);
    const moneyLeft = totalAmountOfMoney - (boughtBitcoins * oneBitcoin);

    console.log(`Bought bitcoins: ${boughtBitcoins}`);

    if (daysCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${daysCounter}`);
    }

    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
buyFirstBitcoin([100, 200, 300]);
/*
Bought bitcoins: 2 
Day of the first purchased bitcoin: 2
Left money: 10531.78 lv.
*/