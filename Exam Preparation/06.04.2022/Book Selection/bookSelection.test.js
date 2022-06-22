const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe("Tests …", function () {
    describe("Test isGenreSuitable", function () {

        it("Test age parameter", function () {
            expect(() => { bookSelection.isGenreSuitable('string', 1) }).to.not.throw();
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
        });
        it("Test with another not-suitable genre parameter", function () {
            expect(() => { bookSelection.isGenreSuitable('string', 1) }).to.not.throw();
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        });
        it("Test with another suitable genre parameter", function () {
            expect(() => { bookSelection.isGenreSuitable('string', 1) }).to.not.throw();
            expect(bookSelection.isGenreSuitable('Fantasy', 12)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Fantasy', 11)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Fantasy', 13)).to.equal('Those books are suitable');
        });

    });
    describe("Test isItAffordable(number, number)", function () {

        it("Test parameters", function () {
            expect(() => { bookSelection.isItAffordable(12, 12) }).to.not.throw();
            expect(() => { bookSelection.isItAffordable('12', 12) }).to.throw(Error, 'Invalid input');
            expect(() => { bookSelection.isItAffordable(false, 12) }).to.throw(Error, 'Invalid input');
            expect(() => { bookSelection.isItAffordable([], 12) }).to.throw(Error, 'Invalid input');
            expect(() => { bookSelection.isItAffordable(12, '12') }).to.throw(Error, 'Invalid input');
            expect(() => { bookSelection.isItAffordable(12, true) }).to.throw(Error, 'Invalid input');
            expect(() => { bookSelection.isItAffordable(12, []) }).to.throw(Error, 'Invalid input');
        });
        it("Test calculations", function () {
            expect(bookSelection.isItAffordable(6, 5)).to.equal('You don\'t have enough money');
            expect(bookSelection.isItAffordable(6, 6)).to.equal('Book bought. You have 0$ left');
            expect(bookSelection.isItAffordable(5, 6)).to.equal('Book bought. You have 1$ left');

        });
    });

    describe("Test suitableTitles(arr, string)", function () {

        it("Test parameters", function () {
            expect(() => {
                bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Star Wars", genre: "Fantasy" }], 'Thriller')
            }).to.not.throw();
            expect(() => {
                bookSelection.suitableTitles('string', 'Thriller')
            }).to.throw(Error, 'Invalid input');
            expect(() => {
                bookSelection.suitableTitles(23, 'Thriller')
            }).to.throw(Error, 'Invalid input');
            expect(() => {
                bookSelection.suitableTitles(false, 'Thriller')
            }).to.throw(Error, 'Invalid input');
            expect(() => {
                bookSelection.suitableTitles(undefined, 'Thriller')
            }).to.throw(Error, 'Invalid input');

            expect(() => {
                bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 23)
            }).to.throw(Error, 'Invalid input');
            expect(() => {
                bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], false)
            }).to.throw(Error, 'Invalid input');
            expect(() => {
                bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], [])
            }).to.throw(Error, 'Invalid input');
            expect(() => {
                bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], undefined)
            }).to.throw(Error, 'Invalid input');

        });
        it('Add the new book to the array and returns the result array', () => {
            
            expect(bookSelection.suitableTitles(
                [{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller').toString()).to.equals('The Da Vinci Code');
            expect(bookSelection.suitableTitles(
                [{ title: "string", genre: "Thriller" }, { title: "str", genre: "Thriller" }], 'Thriller').toString())
                .to.equals('string,str');
        });
    });
});

