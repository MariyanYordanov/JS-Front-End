/*
4. Show More

Write a JS function that expands a hidden section of text when a link is clicked. The link should disappear as the rest of the text shows up.

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function showText() {
    const hiddenText = document.getElementById("text");
    hiddenText.style.display = 'inline';
    const readMore = document.querySelector("#more");
    readMore.style.display = 'none';
}