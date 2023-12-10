/*
4. Github Commits

Write a JS program that loads all commit messages and their authors from a github repository using a given HTML.
The loadCommits() function should get the username and repository from the HTML textboxes with IDs "username" and "repo" 
and make a GET request to the Github API: https://api.github.com/repos/<username>/<repository>/commits

Swap <username> and <repository> with the ones from the HTML:
· In case of success, for each entry add a list item (<li>) in the unordered list (<ul>) with id "commits" with text in the following format:
"<commit.author.name>: <commit.message>"
· In case of an error, add a single list item (<li>) with text in the following format: "Error: <error.status> (Not Found)"
*/

function loadCommits() {

    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsList = document.getElementById('commits');

    commitsList.textContent = '';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response => {

            if (!response.ok) {
                const errorListItem = document.createElement('li');
                errorListItem.textContent = `Error: ${response.status} - ${response.statusText}`;
                commitsList.appendChild(errorListItem);
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            return response.json();
        })
        .then(data => {

            data.forEach(commit => {
                const listItem = document.createElement('li');
                listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsList.appendChild(listItem);
            });
        })
        .catch(error => {

            console.log('Error', error);
        });
}