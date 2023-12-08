/*
4. Fill Dropdown

Your task is to take values from input fields with ids "newItemText" and "newItemValue". 
Then you should create and append an <option> to the <select> with id "menu".

Hints
· Your function should take the values of newItemText and newItemValue. 
After that, you should create a new option element and set its textContent 
and its value to the newly taken ones.
· Once you have done all of that, you should append the newly created option 
as a child to the select item with id "menu".
· Finally, you should clear the value of the two input fields.
*/

function addItem() {
    
    const inputText = document.getElementById("newItemText");
    const inputValue = document.getElementById("newItemValue");
    const menu = document.getElementById("menu");

    const option = document.createElement("option");
    option.textContent = inputText.value;
    option.value = inputValue.value;

    if(inputText.value !== '' && inputValue.value !== ''){
        menu.appendChild(option);
    }
    
    inputText.value = '';
    inputValue.value = '';
}