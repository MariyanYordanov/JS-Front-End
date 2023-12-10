/*
2. GitHub Repos

Your task is to write a JS function that loads a github repository asynchronously with AJAX. 
You should use the Fetch API. Obtain the data by making a GET request to the following URL:

 “https://api.github.com/users/testnakov/repos”

Transform the body to text with res.text() and in the second then() block of the 
Promise replace the text content of a div element with id "res" 
with the value from the response. 
Do not format the response in any way.
*/

function loadRepos() {
   
   fetch('https://api.github.com/users/testnakov/repos')
       .then(res => res.text())
       .then(data => document.getElementById('res').textContent = data)
       .catch(error => console.log(error));
}
