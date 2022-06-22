const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe("Tests", function () {
    describe("Test hiringEmployee(name, position, yearsExperience)", function () {
        it('happy path Programmer, 3 yrs or more', () => {
            expect(companyAdministration.hiringEmployee('str', 'Programmer', 3)).to.equal(`str was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('str', 'Programmer', 4)).to.equal(`str was successfully hired for the position Programmer.`)
        });
        it('Throw error if position not Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('str', 'Bartender', 3)).to.throw(Error, `We are not looking for workers for this position.`);
        });
        it('Return not approved if position Programmer, but experience lower than 3', () => {
            expect(companyAdministration.hiringEmployee('str', 'Programmer', 1)).to.equal(`str is not approved for this position.`)
        });

    });
    describe("Test calculatedSalary(number)", function () {
        it('happy path, hours are positive number, without and with bonus', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15 * 1);
            expect(companyAdministration.calculateSalary(161)).to.equal((15 * 161) + 1000);
            expect(companyAdministration.calculateSalary(160)).to.equal((15 * 160));
        });
        it('Throw error if not number', () => {
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary('1')).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(false)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary([])).to.throw(Error, 'Invalid hours');
        });
        it('Throw error if negative number', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error, 'Invalid hours');
        });
    });

    describe("Test firedEmployee(employees, index)", function () {
        it('happy path, array and index are valid', () => {
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
        });
        it('Throw error - Not an array', () => {
            expect(() => companyAdministration.firedEmployee('abc', 1)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw(Error, 'Invalid input');
        });
        it('Throw error - Not a number', () => {
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], '2')).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], undefined)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], [])).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], false)).to.throw(Error, 'Invalid input');
        });
        it('Throw error - Outside array bounds', () => {
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], 3)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], -3)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], -1)).to.throw(Error, 'Invalid input');
        });
    });
});

