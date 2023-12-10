/*
3. Github Repos By Username

Your task is to write a JS function that executes an AJAX request with Fetch API and loads all user github repositories by a given username 
(taken from an input field with id "username") into a list (each repository as a list-item) with id "repos". 
Use the properties full_name and html_url of the returned objects to create a link to each repo’s GitHub page. 
If an error occurs (like 404 "Not Found"), append to the list a list-item with text the current instead. 
Clear the contents of the list before any new content is appended. 
See the highlighted lines of the skeleton for formatting details of each list item.
*/

function loadRepos() {
    const input = document.getElementById('username').value;
    const reposList = document.getElementById('repos');
    
    // Clear the contents of the list before any new content is appended
    reposList.innerHTML = '';

    fetch(`https://api.github.com/users/${input}/repos`)
        .then(response => {
            if (!response.ok) {
                // If an error occurs, append an error message to the list
                const errorListItem = document.createElement('li');
                errorListItem.textContent = `Error: ${response.status} - ${response.statusText}`;
                reposList.appendChild(errorListItem);
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Append each repository to the list
            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.full_name}</a>`;
                reposList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
