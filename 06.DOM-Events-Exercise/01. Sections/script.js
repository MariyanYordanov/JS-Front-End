/*
1. Sections

You will receive an array of strings. 
For each string, create a div with a paragraph with the string in it. 
Each paragraph is initially hidden (display:none). 
Add a click event listener to each div that displays the hidden paragraph. 
Finally, you should append all divs to the element with an id "content".
*/

function create(words) {

   let result = document.getElementById("content");

   words.forEach(element => {
      
   const div = document.createElement("div");
   const p = document.createElement("p");

      p.textContent = element;
      p.style.display = "none";
      div.appendChild(p);
      result.appendChild(div);
      div.addEventListener('click', displayHidden);
   });
   
   

   function displayHidden(e) {
      const target = e.currentTarget.querySelector("p");
      if(target.style.display === "none"){
         target.style.display = "block";
      }
   }
}