let books = ['safdsfd'];
let variable = 0;


class Book {
    constructor(
        author = 'unknown',
        title = 'unknown',
        ISBN = 'unknown',
        read = false
    ) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.read = read;
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
        titleDiv.addEventListener('click', function(){change(i);});


        let authorDiv = document.createElement('div');
        authorDiv.className = 'authorDiv';
        authorDiv.innerHTML = books[i].author;

        let isbnDiv = document.createElement('div');
        isbnDiv.className = 'isbnDiv';
        isbnDiv.innerHTML = books[i].ISBN;


        let readDiv = document.createElement('div');
        readDiv.className = 'readDiv';
        readDiv.innerHTML = books[i].read;

        let deleteButton = document.createElement('button');
        deleteButton.className = 'deteleButton';
        deleteButton.innerHTML = 'delete';
        deleteButton.style.backgroundColor = 'green';
        deleteButton.addEventListener('click', function(){deleteBook(i);});

        let changeStatusButton = document.createElement('button');
        changeStatusButton.className = 'changeStatusButton';
        changeStatusButton.innerHTML = 'change status';
        changeStatusButton.addEventListener('click', function(){changeStatus(i);});

        book.appendChild(authorDiv);
        book.appendChild(titleDiv);
        book.appendChild(isbnDiv);
        book.appendChild(readDiv);
        book.appendChild(deleteButton);
        book.appendChild(changeStatusButton);

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
        author = '';
        title = '';
        isbn = '';
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

function changeStatus(index)
{
    if (books[index].read === false)
    {
        books[index].read = true;
    }
    else
    {
        books[index].read = false;
    }

    displayBooks();
}

function change(index)
{
    var formHTML = '<form id="myForm2">' +
                  '<label for="name">Value:</label>' +
                  '<input type="text" id="value" name="name" required>' +
                  
                  '<input type="submit" value="Submit">' +
                  '</form>';

  var popup = window.open("", "Form Popup", "height=300,width=500");
  popup.document.write(formHTML);

  document.getElementById('myForm2').addEventListener('submit', function(event){event.preventDefault(); books[index].title = document.getElementById('value').value; displayBooks();})

  popup.document.close();
}