const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe("Tests", function () {
    describe('Testing searchCar(shop, model)', () => {
        it('Happy path with good arguments', () => {
            expect(rentCar.searchCar(['str'], 'str')).to.equal(`There is 1 car of model str in the catalog!`);
            expect(() => rentCar.searchCar(['a'], 'str')).to.throw(Error, 'There are no such models in the catalog!');
            expect(() => rentCar.searchCar([], 'str')).to.throw(Error, 'There are no such models in the catalog!');
        });
        it('Shop parameter invalid', () => {
            expect(() => rentCar.searchCar('a', 'str')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(1, 'str')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(undefined, 'str')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(false, 'str')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(false)).to.throw(Error, 'Invalid input!');

        });
        it('Model parameter invalid', () => {
            expect(() => rentCar.searchCar(['a'], [])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['a'], 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['a'], false)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['a'], undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['a'])).to.throw(Error, 'Invalid input!');
        })
    });
    describe('Testing calculatePriceOfCar(model, days)', () => {
        it('Happy path with good arguments', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.equal(`You choose Volkswagen and it will cost $20!`);
        });
        //Added to troubleshoot v
        it("happy path", () => {
            expect(rentCar.calculatePriceOfCar("Volkswagen", 2)).to.equal("You choose Volkswagen and it will cost $40!");
        });
        //Added to troubleshoot ^
        it('Happy path - no such model', () => {
            expect(() => rentCar.calculatePriceOfCar('str', 1)).to.throw(Error, `No such model in the catalog!`)
        });
        it('Model parameter invalid', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar([], 1)).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar(false, 1)).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar(undefined, 1)).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar(undefined)).to.throw(Error, `Invalid input!`);
        });
        it('Days parameter invalid', () => {
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', 'str')).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', undefined)).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', [])).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', true)).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar('Volkswagen')).to.throw(Error, `Invalid input!`);
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', 0.3)).to.throw(Error, `Invalid input!`);
        });
    });

    describe('Testing checkBudget(costPerDay, days, budget)', () => {
        it('Happy path with good arguments', () => {
            expect(rentCar.checkBudget(1, 2, 3)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(1, 2, 2)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(45, 4, 180)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(3, 2, 1)).to.equal('You need a bigger budget!');
        });
        it('CostPerDay parameter invalid', () => {
            expect(() => rentCar.checkBudget('1', 2, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget([], 2, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(false, 2, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(undefined, 2, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(undefined, 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(0.1, 2, 3)).to.throw(Error, 'Invalid input!');

        });
        it('Days parameter invalid', () => {
            expect(() => rentCar.checkBudget(1, '2', 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, [], 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, false, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, undefined, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 0.2, 3)).to.throw(Error, 'Invalid input!');

        });
        it('Budget parameter invalid', () => {
            expect(() => rentCar.checkBudget(1, 2, '3')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, [])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, false)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, 0.3)).to.throw(Error, 'Invalid input!');
        });

    });

});
