/*
1. List of Items

Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.
*/

function addItem() {
    let input = document.getElementById("newItemText");
    let li = document.createElement("li");
    let items = document.getElementById("items");

    li.textContent = input.value;
    items.appendChild(li);
    input.value = '';
}