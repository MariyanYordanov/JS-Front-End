/*
7. Extract Parenthesis

Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID.
The result is a string, joined by "; " (semicolon, space).

Input

Your function will receive a string parameter, representing the target element ID, from which text must be extracted. 
The text should be extracted from the DOM.

Output

Return a string with all matched text, separated by "; " (semicolon, space).
*/

function extract(id) {

    const text = document.getElementById(id).textContent;
    const group = "(.+?)";
    const pattern = new RegExp(`\(${group}\)`, 'g');
    let match = pattern.exec(text);
    let matches = [];

    while (match !== null) {
        let innerMatch = match.exec(group);
        matches.push(innerMatch);
        match = pattern.exec(text);
    }

    console.log(matches.join("; "));
}