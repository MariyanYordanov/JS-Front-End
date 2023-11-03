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

The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.

The output is every element on the N-th step starting from the first one. If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array.

The output is the return value of your function and must be an array. */

function everyN(array, step) {
    console.log(array.slice(0,step,));
}
everyN(['5','20','31','4','20'],2)