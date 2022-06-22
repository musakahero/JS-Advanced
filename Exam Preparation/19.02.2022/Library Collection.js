class LibraryCollection {
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if(this.books.length >= this.capacity) {
            throw Error("Not enough space in the collection.");
        }

        this.books.push({
            bookName,
            bookAuthor,
            paid:false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName){
        let foundBookIndex = this.books.findIndex(b => b.bookName == bookName);
        if(foundBookIndex == -1){
            throw Error(`${bookName} is not in the collection.`);
        }
        if(this.books[foundBookIndex].paid == true){
            throw Error(`${bookName} has already been paid.`);
        };

        this.books[foundBookIndex].paid = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName){
        let foundBookIndex = this.books.findIndex(b => b.bookName == bookName);
        if(foundBookIndex == -1){
            throw Error(`The book, you're looking for, is not found.`);
        }
        if(this.books[foundBookIndex].paid == false){
            throw Error(`${bookName} need to be paid before removing from the collection.`);
        };

        this.books.splice(foundBookIndex, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){
        let result = [];

        if(bookAuthor){
            if(this.books.findIndex(b => b.bookAuthor == bookAuthor) == -1){
                throw Error(`${bookAuthor} is not in the collection.`);
            }

            for (const book of this.books) {
                if(book.bookAuthor == bookAuthor){
                    result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid?'Has Paid':'Not Paid'}.`)
                }
            }
        } else {
            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            let sorted = this.books.sort((a,b) => (a.bookName).localeCompare(b.bookName));

            for (const book of sorted) {
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid?'Has Paid':'Not Paid'}.`);
            }
        }

        //print
        return result.join('\n');
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
