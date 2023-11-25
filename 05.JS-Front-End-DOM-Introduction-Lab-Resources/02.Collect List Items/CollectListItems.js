/*
2. Collect List Items

Write a JS function that scans a given HTML list and appends all collected list items text to a textarea on the same page when the user clicks on a button.

Input/Output

There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function extractText() {

    const items = document.getElementsByTagName('li');
    Array.from(items); // convert collection to array
    const result = [];

    for (const item of items) {
        result.push(item.textContent);
    }

    const textArea = document.getElementById('result');
    textArea.textContent = result.join("\n");

    /*
    
    const items = Array.from(document.getElementsByTagName('li'));
    const text = items.map((item) => item.textContent).join("\n");
    document.querySelector('textarea).value = text;

    =>

    document.querySelector('textarea).value 
        = Array.from(document.getElementsByTagName('li')).map((item) => item.textContent).join("\n");
    
     */
}