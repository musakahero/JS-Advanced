const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');

describe("Tests", function () {
    describe("Test calcPriceOfFlowers(flower, price, quantity)", function () {
        it("Happy path", function () {
            expect(flowerShop.calcPriceOfFlowers('str', 2, 3)).to.equal('You need $6.00 to buy str!');
        });
        it("Invalid parameters", function () {
            expect(() => flowerShop.calcPriceOfFlowers(1, 2, 3)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1, '2', 3)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1, 2, '3')).to.throw(Error, 'Invalid input!');
        });
    });
    describe("Test checkFlowersAvailable(flower, gardenArr)", function () {
        it("Happy path", function () {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b', 'c'])).to.equal(`The a are available!`);
            expect(flowerShop.checkFlowersAvailable('d', ['a', 'b', 'c'])).to.equal(`The d are sold! You need to purchase more!`);
        });
    });
    describe("Test sellFlowers(gardenArr, space)", function () {
        it("Happy path", function () {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 2)).to.equal('a / b');
        });
        it("Space is out of upper bound", function () {
            expect(()=>flowerShop.sellFlowers(['a', 'b', 'c'], 4)).to.throw(Error, 'Invalid input!');
        });
        it("Space is out of lower bound", function () {
            expect(()=>flowerShop.sellFlowers(['a', 'b', 'c'], -1)).to.throw(Error, 'Invalid input!');
        });
        it("Invalid parameters", function () {
            expect(()=>flowerShop.sellFlowers('a b c', -1)).to.throw('Invalid input!');
            expect(()=>flowerShop.sellFlowers(['a', 'b', 'c'], '1')).to.throw('Invalid input!');
            
        });
    });

});

