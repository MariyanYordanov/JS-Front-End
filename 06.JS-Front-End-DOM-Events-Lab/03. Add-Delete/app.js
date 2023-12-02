/*
3. Add / Delete

Extend the previous problem to display a [Delete] link after each list item. Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.
*/

function addItem() {
    const input = document.getElementById("newItemText");
    const result = document.getElementById("items");

    const newLi = document.createElement("li");
    newLi.textContent = input.value;

    const deleteLink = document.createElement("a");
    deleteLink.textContent = "[Delete]";
    deleteLink.href = "#";

    deleteLink.addEventListener('click', deleteItem);

    const errorDiv = document.createElement("div");
    errorDiv.id = "error";

    let hasError = false;

    if (input.value !== "") {
        newLi.appendChild(deleteLink);
        result.appendChild(newLi);
    } else {
        errorDiv.textContent = "Add name into text field";
        const error = document.getElementsByTagName("main")[0];
        error.appendChild(errorDiv);
        hasError = true;
    }

    input.value = "";

    if (hasError) {
        input.addEventListener('click', onClickInput);
    }

    function onClickInput(e) {
        e.target.parentNode.removeChild(errorDiv);
    }

    function deleteItem(e) {
        const row = e.currentTarget.parentNode;
        row.remove();
    }
}