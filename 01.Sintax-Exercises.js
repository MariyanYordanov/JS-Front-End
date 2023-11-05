
/*3. Leap Year

Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. The output should be following:

· If the year is a leap, print: "yes"
· Otherwise, print: "no" */

function leapYearSecond(year){
   let date = new Date(year, 1, 1);
   date.setMonth(date.getMonth() + 1);
   date.setDate(date.getDate() - 1);
   if(date.getDate() === 29){
      console.log(`yes`)
   } else{
      console.log(`no`)
   }
}

function leapYear(year){
 if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0){
    console.log("yes")
 } else{
    console.log("no")
 }
}
// leapYearSecond(1985);
// leapYear(1984);

/*4.Print and Sum

Write a function that displays numbers from given start to given end and their sum.
The input comes as two number parameters.
Print the result like the examples below: */

function printSunm(start, end){
   let buff = "";
   let sum = 0;
   for(let i = start; i <= end; i++){
      buff += i + " ";
      sum += i;
   }
   console.log(buff.trim());
   console.log(`Sum: ${sum}`);

}
//printSunm(5, 10);

/*5. Multiplication Table

You will receive a number as a parameter.
Print the 10 times table for this number.
See the examples below for more information.
Print every row of the table in the following format:
{number} X {times} = {product} */

function multiplicationTableForNumber(number){
   for(let i = 1; i <= 10; i++){
      console.log(`${number} x ${i} = ${number * i}`);
   }
}
//multiplicationTableForNumber(3);

/*6. Sum Digits

Write a function, which will be given a single number.
Your task is to find the sum of its digits. */

function sumDigit(num){
   let numAsSrtring = String(num);
   let sum = 0;
   for(let i = 0; i < numAsSrtring.length; i++){
      let currentNumber = Number(numAsSrtring[i]);
      sum += currentNumber;
   }

   console.log(sum);
}
//sumDigit(123);

/*7. Chars to String

Write a function, which receives 3 parameters.
Each parameter is a single character.
Combine all the characters into one string and print it on the console */

function charsToString(a, b, c,) {
   console.log(a+b+c);
}
// charsToString('%','2','&');

/*
8. Reversed Chars

Write a program that takes 3 parameters (characters) and prints them in reversed order with a space between them.
*/

function reversedChars(a, b, c){
   console.log(c + " " + b + " " + a);
}
// reversedChars('a','b','c');

/*
9. Fruit

Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram.

Print the following text on the console:

`I need ${money} to buy {weight} kilograms {fruit}.`

Print the weight and the money rounded to two decimal places.

The input comes as three arguments passed to your function.

The output should be printed on the console.
 */

function fruit(fruit, quantityInGrams, pricePerKilograms) {
   let money = (quantityInGrams / 1000) * pricePerKilograms;
   console.log(`I need ${money.toFixed(2)} to buy ${(quantityInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);
}
fruit(`orange`,2500,1.80);