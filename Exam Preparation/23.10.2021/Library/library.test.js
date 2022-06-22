const { expect } = require('chai');
const { library } = require('./library');

describe("Tests", function () {
    describe("Test calcPriceOfBook (nameOfBook, year)", function () {
        it("Happy path", function () {
            expect(library.calcPriceOfBook('str', 1979)).to.equal(`Price of str is 10.00`);
            expect(library.calcPriceOfBook('str', 1980)).to.equal(`Price of str is 10.00`);
            expect(library.calcPriceOfBook('str', 1981)).to.equal(`Price of str is 20.00`);
            expect(library.calcPriceOfBook('str', 0)).to.equal(`Price of str is 10.00`);
        });
        it("Throw error for invalid parameters", function () {
            //both params are invalid
            expect(() => library.calcPriceOfBook(1, 1)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(1, '1980')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(1, 1.23)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(1)).to.throw(Error, 'Invalid input');
            //only left param is invalid
            expect(()=>library.calcPriceOfBook(1, 1980)).to.throw(Error, 'Invalid input');
            //only right param is invalid
            expect(()=>library.calcPriceOfBook('str', 'str')).to.throw(Error, 'Invalid input');
        });
    });

    describe("Test findBook (booksArr, desiredBook)", function () {
        it("Happy path", function () {
            expect(library.findBook(['a', 'b', 'c'], 'a')).to.equal("We found the book you want.");
            expect(library.findBook(['a', 'b', 'c'], 'd')).to.equal("The book you are looking for is not here!");
        });
        it("Throw error if length of booksArr is 0", function () {
            expect(() => library.findBook([], 'a')).to.throw(Error, "No books currently available");
        });
    });
    describe("Test arrangeTheBooks (countBooks)", function () {
        it("Happy path", function () {
            expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(30)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased."); 
        });
        it("Throw error for invalid parameters", function () {
            expect(() => library.arrangeTheBooks('30')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(30.5)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks()).to.throw(Error, 'Invalid input');
        });
    });

});
