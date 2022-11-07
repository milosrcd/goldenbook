    let get = document.getElementById('get');
    let add = document.getElementById('add-book');


    function Book(title, author, year, category, isbn, description) {
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

    Library.prototype.render = function (book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.category}</td>
        <td>${book.isbn}</td>
        <td>${book.description}</td>
        `;
        list.appendChild(row);
    };

    let publicLibrary = new Library();

/*     let book = new Book();
    
    publicLibrary.addbook(book);
    publicLibrary.render(book);
 */

    add.addEventListener('click', function(e){
        const title = getElementById('title').value;
        const author = getElementById('author').value;
        const year = getElementById('year').value;
        const category = getElementById('category').value;
        const isbn = getElementById('isbn').value;
        const description = getElementById('description').value;

        let book = new Book(title, author, year, category, isbn,  description);
        publicLibrary.addbook(book);
        publicLibrary.render(book);
    });