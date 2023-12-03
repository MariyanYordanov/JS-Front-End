/*
6. Format the Text

Create a functionality that gets a text from textarea, formats the given text - you need to find out how many sentences there are in the text, simply split the whole text by '.' Also, every sentence must have at least 1 character.

Generate HTML paragraphs as a string (Use interpolation string to create paragraph element: `<p> {text} </p>`) and append it to the div with an id = "output".

When the [Format] button is clicked, get the text inside the textarea with an id="input" and format it. The formatting is done as follows:

· Create a new paragraph element that holds no more than 3 sentences from the given input.
· Hint: Use interpolation string to create paragraph element. (`<p> {text} </p>`)
· If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these sentences and append this paragraph to the div with an id="output".
Otherwise, when you have more than 3 sentences, create enough paragraphs to get all sentences from the textarea.

Just remember to restrict the sentences in each paragraph to 3.

Example:

· If the input textarea contains 2 sentences, create only 1 paragraph with these 2 sentences
· If the input textarea contains 7 sentences, create 3 paragraphs - The first paragraph must contain the first 3 sentences - The second paragraph must contain the other three sentences of the whole text - The third paragraph will contain only the last sentence
*/

function solve() {

  const input = document.getElementById("input").value;
  let sentences = input.split('.');
  let output = document.getElementById("output");

  if (sentences.length > 0) {
    for (let i = 0; i < sentences.length; i++) {
      let paragraph = document.createElement('p');
      paragraph.textContent = sentences.splice(0, 3).join('. ');
      output.appendChild(paragraph);
    }
  }
}