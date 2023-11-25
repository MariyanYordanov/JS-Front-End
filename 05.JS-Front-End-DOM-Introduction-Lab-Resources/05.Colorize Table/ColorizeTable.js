/*
5. Colorize Table

Write a JS function that changes the color of all even rows when the user clicks a button. 
Apply the color "Teal" to the target rows.

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function colorize() {
    const rows = Array.from(document.querySelectorAll("tr:nth-child(even)"));
    rows.forEach((row) => {
        row.style.background = "teal";
    });
}