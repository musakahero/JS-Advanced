const { expect } = require('chai');
const { cinema } = require('./cinema');

describe("Tests", function () {
    describe("Test showMovies(movieArr)", function () {
        it("Happy path", function () {
           expect(cinema.showMovies(['a', 'b', 'c'])).to.equal('a, b, c');
        });
        it("If the length of the input array is zero", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("Check if join is done properly if only 1 element in array", function () {
            expect(cinema.showMovies(['a'])).to.equal('a');
        });
    });
    describe("Test ticketPrice(projectionType)", function () {
        it("Happy path", function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });
        it("Proj type not included in list", function () {
           expect(()=>cinema.ticketPrice('a')).to.throw(Error, 'Invalid projection type.');
        });
    });
    describe("swapSeatsInHall(firstPlace, secondPlace)", function () {
        it("Successful change", function () {
            expect(cinema.swapSeatsInHall(1,2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20,1)).to.equal('Successful change of seats in the hall.');
        });
        it("Unsuccessful change", function () {
            expect(cinema.swapSeatsInHall(-1,2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,-2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(-1,-2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0,1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0,0)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(22,33)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(22,1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,33)).to.equal('Unsuccessful change of seats in the hall.')
        });
        it("Invalid parameter types", function () {
            expect(cinema.swapSeatsInHall('1',2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,'2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1','str')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5,1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,1.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5,2.5)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});

