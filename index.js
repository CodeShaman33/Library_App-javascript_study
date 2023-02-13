let books = ['safdsfd'];


class Book {
    constructor(
        author = 'unknown',
        title = 'unknown',
        ISBN = 'unknown'
    ) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

}


function displayBooks() {
    let parent = document.getElementById('books');
    parent.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        let book = document.createElement('div');
        book.className = 'book';
        parent.appendChild(book);

        let titleDiv = document.createElement('div');
        titleDiv.className = 'titleDiv';
        titleDiv.innerHTML = books[i].title;

        let authorDiv = document.createElement('div');
        authorDiv.className = 'authorDiv';
        authorDiv.innerHTML = books[i].author;

        let isbnDiv = document.createElement('div');
        isbnDiv.className = 'isbnDiv';
        isbnDiv.innerHTML = books[i].ISBN;

        let deleteButton = document.createElement('button');
        deleteButton.className = 'deteleButton';
        deleteButton.innerHTML = 'delete';
        deleteButton.addEventListener('click', function(){deleteBook(i);});



        book.appendChild(authorDiv)
        book.appendChild(titleDiv)
        book.appendChild(isbnDiv)
        book.appendChild(deleteButton)

    }
}




document.getElementById('add').addEventListener('click',
    function () {
        document.getElementById('myForm').style.display = 'block';

    }
)

document.getElementById('myForm').addEventListener('submit',
    function (event) {
        event.preventDefault();

        let author = document.getElementById('author').value;
        let title = document.getElementById('title').value;
        let isbn = document.getElementById('ISBN').value;

        let newBook = new Book(author, title, isbn);
        books.push(newBook);
        displayBooks();
        return false;


    }
)

document.getElementsByClassName('deleteButton').addEventListener('click', deleteBook(deleteBook.id))

function deleteBook(index)
{
    books.splice(index, 1);
    displayBooks();
}