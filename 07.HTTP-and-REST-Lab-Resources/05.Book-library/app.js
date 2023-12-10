/*
5. Book Library

First task is to "GET" all books. To consume the request with POSTMAN your url should be the
following: http://localhost:3030/jsonstore/collections/books

Using the provided skeleton, write the missing functionalities.
Load all books by clicking the button "LOAD ALL BOOKS"

Get Book

This functionality is not needed in this task, but you can try it with postman by sending request to
"GET" the Book with id:" d953e5fb-a585-4d6b-92d3-ee90697398a0". Send a GET request to this URL:

http://localhost:3030/jsonstore/collections/books/:id

Create Book

Write functionality to create a new book, when the submit button is clicked. 
Before sending the request be sure the fields are not empty (make validation of the input). 
To create a book, you have to send a "POST" request and the JSON body should be in the following format:

{
  "author": "New Author",
  "title": "New Title"
}

Update Book

By clicking the edit button of a book, change the form:

The HTTP command "PUT" modifies an existing HTTP resource. The URL is:

http://localhost:3030/jsonstore/collections/books/:id

The JSON body should be in the following format:

{
  "author": "Changed Author",
  "title": "Changed Title"
}

Delete Book

By clicking the delete button you have to delete the book, without any confirmation. 
To delete a book use "DELETE" command and send REQUEST: http://localhost:3030/jsonstore/collections/books/:id
*/

function attachEvents() {

    const loadAllBooks = document.getElementById('loadBooks');
    let bookTable = document.querySelector('tbody');
    const bookList = document.querySelectorAll('tbody tr');

    loadAllBooks.addEventListener('click', () => {
        fetch('http://localhost:3030/jsonstore/collections/books')
            .then(res => res.json())
            .then((data) => {
                const books = Object.values(data)
                
                for (const book of books) {
                    createBookRow(book);
                }
            });
    });

    function createBookRow(book){
        
        const row = document.createElement('tr');

        const dataTitle = document.createElement('td');
        dataTitle.textContent = book.title;

        const dataAuthor = document.createElement('td');
        dataAuthor.textContent = book.author;

        const dataButtons = document.createElement('td');

        const buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Edit';

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';

        bookTable.appendChild(row);

        row.appendChild(dataTitle);
        row.appendChild(dataAuthor);
        row.appendChild(dataButtons);

        dataButtons.appendChild(buttonEdit);
        dataButtons.appendChild(buttonDelete);

        return row;
    }

}

attachEvents();