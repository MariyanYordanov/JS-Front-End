/*
6. Sum Table

Write a JS function that finds the first table in a document and sums the values in the last column.
The result is then displayed in an element with ID "sum".

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function sumTable() {
    const allPrices = document.querySelectorAll("td:nth-child(even)");
    let sum = 0;

    for (let i = 0; i < allPrices.length - 1; i++) {
        sum += Number(allPrices[i].textContent);
    }

    document.getElementById("sum").textContent = sum;
}