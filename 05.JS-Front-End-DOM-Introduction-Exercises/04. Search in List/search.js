/*
4. Search in List

An HTML page holds a list of towns, a search box, and a [Search] button. Implement the search function to bold and underline the items from the list which include the text from the search box. Also, print the number of items the current search matches in the format `${matches} matches found`.

Note: It is necessary to clear the results of the previous search.
*/

function search() {
   const towns = Array.from(document.querySelectorAll("li"));
   const searchText = document.getElementById("searchText").value;
   const resultElement = document.getElementById("result");
   let mathes = 0;

   towns.forEach(element => {
      element.style.fontWeight = '';
      element.style.textDecoration = '';
   });

   towns.forEach(element => {

      if (element.textContent.includes(searchText)) {
         mathes++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }

      resultElement.textContent = `${mathes} matches found`;
   });
}