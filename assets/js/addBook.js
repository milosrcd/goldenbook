let add = document.getElementById('add')


function Book(image, title, author, year, category, isbn, description) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.year = year;
    this.category = category;
    this.isbn = isbn;
    this.description = description;
}

function Library() {
    this.bookList = [];
}

Library.prototype.addbook = function (book) {
    this.bookList.push(book);
};

Library.prototype.clearFields = function () {
    document.getElementById('imgUrl').value = '';
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    document.getElementById('category').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('description').value = '';
};
Library.prototype.render = function (book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.image}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.category}</td>
        <td>${book.isbn}</td>
        <td>${book.description}</td>
        <td><a href="#" class='delete'>X</a></td>
        `;
    list.appendChild(row);
};

let publicLibrary = new Library();

add.addEventListener('click', function (e) {

    const image = document.getElementById('imgUrl').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const category = document.getElementById('category').value;
    const isbn = document.getElementById('isbn').value;
    const description = document.getElementById('description').value;
    
    let book = new Book(image, title, author, year, category, isbn, description);

    publicLibrary.addbook(book);
    publicLibrary.render(book);
    publicLibrary.clearFields();
    console.log(book);
});

