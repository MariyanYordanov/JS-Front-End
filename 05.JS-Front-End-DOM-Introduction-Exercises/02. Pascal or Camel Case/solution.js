

/*
2. Pascal or Camel Case

An HTML file is given and your task is to write a function that takes two string parameters as an input and transforms the first parameter to the type required by the second parameter.

· The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.

· The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"

When the button is clicked the function should convert the first string to either of the cases. The output should consist of only one word - the string you have modified. Once your output is done, you should set it as HTML to the <span> element.
*/

function solve() {

  const text = document.getElementById("text").value.toLowerCase();

  const namingConventeion = document.getElementById("naming-convention").value;

  const result = document.getElementById("result");

  switch (namingConventeion) {
    case "Pascal Case":
      const textToPascaiCase = Array.from(text.replace(/\b\w/g, match => match.toUpperCase()).split(' '));
      
      result.textContent = textToPascaiCase.join('');
      break;
    case "Camel Case":
      const textToCamelCase = text.split(' ');

      for (let i = 1; i < textToCamelCase.length; i++) {
        textToCamelCase[i] = textToCamelCase[i][0].toUpperCase() + textToCamelCase[i].slice(1);
      }

      result.textContent = textToCamelCase.join('');
      break;
    default:

      result.textContent = "Error!";
      break;
  }
}
