/*
5. Highlight Active

Write a function that highlights the currently active section of a document. 
There will be multiple divs with input fields inside them. 
Set the class of the div that contains the currently focused input field to "focused". 
When the focus is lost (blurred), remove the class from the element.

Submit only the focused() function in Judge.

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function focused() {

    const fields = Array.from(document.getElementsByTagName("input"));

    for (const field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(e) {
        const divParent = e.currentTarget.parentNode;
        divParent.classList.add('focused');
    }

    function onBlur(e) {
        const divParent = e.currentTarget.parentNode;
        divParent.classList.remove('focused');
    }
}