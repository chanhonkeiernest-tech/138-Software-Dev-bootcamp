      // Library object
      let library = {
        books: [
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, isAvailable: true },
            { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, isAvailable: true },
            { title: "1984", author: "George Orwell", yearPublished: 1949, isAvailable: false }
        ],

        // Method to add a new book to the library
        addBook: function(newBook) {
            // TODO: Add the newBook object to the books array
           this.books.push(newBook);
        },

        // Method to list all books in the library
        listBooks: function() {
            console.log("Books in the library:");
            // TODO: Loop through the books array and log details of each book
            // console.log(this.books[0].title);
           this.books.forEach(book=>console.log(book));
        },

        // Method to check out a book
        checkOutBook: function(entrytitle) {
            // TODO: Find the book by title and mark it as unavailable if it's available
            this.books.map(book=>{
                if (book.title == entrytitle&&book.isAvailable==true) {
                    book.isAvailable=false;
                } else if(book.title == entrytitle&&book.isAvailable==false){
                    console.log(entrytitle+" is not avalible");
                }
            });
        },

        // Method to return a book
        returnBook: function(title) {
            // TODO: Find the book by title and mark it as available if it's currently checked out
            this.books.map(book=>{
                if (book.title == title&&book.isAvailable==false) {
                    book.isAvailable=true;
                } else if(book.title == title&&book.isAvailable==true){
                    console.log(title+" is already avalible");
                }
            });
        }
    };

    // Testing the library object methods
    // TODO: Call the library methods below to test them
console.log(library);
    // 1. List all books initially
    library.listBooks();

    // 2. Add a new book (use the method with a new book object)
    // Example: { title: "Moby Dick", author: "Herman Melville", yearPublished: 1851, isAvailable: true }
    newbook={ title: "Moby Dick", author: "Herman Melville", yearPublished: 1851, isAvailable: true };
   library.addBook(newbook);

    // 3. Check out a book (try checking out "1984" and "The Great Gatsby")
   library.checkOutBook("1984");
   library.checkOutBook("The Great Gatsby");
library.listBooks();
    // 4. Return a book (try returning "The Great Gatsby" and "1984")
library.returnBook("The Great Gatsby");
library.returnBook("1984");

    // 5. List books again to see the updates
    library.listBooks();