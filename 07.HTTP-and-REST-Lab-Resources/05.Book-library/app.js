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

async function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/collections/books';

    const loadAllBooks = document.getElementById('loadBooks');
    const bookTable = document.querySelector('tbody');
    const formTitle = document.querySelector('input[name=title]');
    const formAuthor = document.querySelector('input[name=author]');

    const createBookButton = document.querySelector('form button');
    const updateBookButton = document.createElement('button');
    updateBookButton.textContent = 'Update';

    loadAllBooks.addEventListener('click', async () => {
        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            
            const data = await response.json();
            bookTable.innerHTML = '';
            const books = Object.keys(data).reduce((acc, _id) => {
                acc.push({ _id, ...data[_id] });
                return acc;
            }, []);
            
            books.forEach(book => createBookRow(book));
        } catch (error) {
            console.log(error);
        }
    });

    updateBookButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const book = {
            title: formTitle.value,
            author: formAuthor.value,
            _id: bookId
        };

        try {
            const response = await fetch(`${baseURL}/${book._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            const editRow = bookTable.querySelector('tr[data-update=true]');

            const editTitle = editRow.firstChild;
            const editAuthor = editTitle.nextSibling;

            editTitle.textContent = book.title;
            editAuthor.textContent = book.author;

            buttonEdit.textContent = 'Edit';
            updateBookButton.replaceWith(createBookButton);

            row.removeAttribute('data-update');
        } catch (error) {
            console.log(error);
        }
    });

    let bookId; 

    function createBookRow(book) {
        const row = document.createElement('tr');

        const bookIdInput = document.createElement('input');
        bookIdInput.type = 'hidden';
        bookIdInput.value = book._id;
        row.appendChild(bookIdInput);

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

        buttonEdit.addEventListener('click', async (e) => {
            e.preventDefault();

            if (buttonEdit.textContent === 'Cancel') {
                formTitle.value = '';
                formAuthor.value = '';

                buttonEdit.textContent = 'Edit';
                updateBookButton.replaceWith(createBookButton);

                row.removeAttribute('data-update');
            } else {
                formTitle.value = book.title;
                formAuthor.value = book.author;

                buttonEdit.textContent = 'Cancel';
                createBookButton.replaceWith(updateBookButton);

                row.setAttribute('data-update', true);

                bookId = book._id; 
            }
        });

        buttonDelete.addEventListener('click', (e) => {
            e.preventDefault();
        
            const rowToDelete = e.currentTarget.parentElement.parentElement;
            const bookId = rowToDelete.querySelector('input[type="hidden"]').value;
            const confirmation = window.confirm("Are you sure you want to delete this book?");
            
            if(confirmation){
                fetch(`${baseURL}/${bookId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error(`Error: ${res.status} ${res.statusText}`);
                    }
                    return res.json();
                })
                .then(rowToDelete.remove())
                .catch(error => console.log('Error', error))
            }
            
        });
    }

    createBookButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const book = {
            title: formTitle.value,
            author: formAuthor.value
        };

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();
            const bookElement = createBookRow({ ...book, _id: result._id });
            bookTable.appendChild(bookElement);

            formTitle.value = '';
            formAuthor.value = '';
        } catch (error) {
            console.log(error);
        }
    });
}

attachEvents();