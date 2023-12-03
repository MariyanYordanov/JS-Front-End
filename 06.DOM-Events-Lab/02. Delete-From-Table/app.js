/*
2. Delete from Table

Write a program that takes an email from an input field and deletes the matching row from a table.
· If entry is found, the textContent in the element with id="result" must be set to "Deleted."
· Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found."
Submit only the deleteByEmail() function in Judge.

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document
*/

function deleteByEmail() {
    const input = document.getElementsByName("email")[0].value;
    const tableRows = Array.from(document.querySelectorAll("tbody tr"));
    const result = document.getElementById("result");
    let isRemoved = false;

    for (let i = 0; i < tableRows.length; i++) {
        const emailSell = tableRows[i].children[1];

        if (emailSell.textContent === input) {
            tableRows[i].parentNode.removeChild(tableRows[i]);
            isRemoved = true;
        }
    }

    if (isRemoved) {
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found.";
    }
}