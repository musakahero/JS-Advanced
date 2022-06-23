const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');

describe("Tests", function () {
    describe("Test sumNumber(num1, num2)", function () {
        it("Happy path", function () {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1.5, 2.3)).to.equal('3.80');
            expect(testNumbers.sumNumbers(1.5, 2)).to.equal('3.50');
            expect(testNumbers.sumNumbers(1, 2.3)).to.equal('3.30');
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(-2, 1)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(-2, -2)).to.equal('-4.00');
            expect(testNumbers.sumNumbers(2, -1.1)).to.equal('0.90');
            expect(testNumbers.sumNumbers(-1.1, 2)).to.equal('0.90');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');


        });
        it("Check if numbers", function () {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1)).to.equal(undefined);
        });

    });
    describe("Test numberChecker(input)", function () {
        it("Happy path", function () {
            expect(testNumbers.numberChecker(5)).to.equal("The number is odd!");
            expect(testNumbers.numberChecker(6)).to.equal("The number is even!");
            expect(testNumbers.numberChecker(false)).to.equal("The number is even!");
            expect(testNumbers.numberChecker('3')).to.equal("The number is odd!");
            expect(testNumbers.numberChecker('')).to.equal("The number is even!");
            expect(testNumbers.numberChecker(null)).to.equal("The number is even!");
        });
        it("Input is NaN", function () {
            expect(() => testNumbers.numberChecker(undefined)).to.throw(Error, "The input is not a number!");
            expect(() => testNumbers.numberChecker(NaN)).to.throw(Error, "The input is not a number!");
            expect(() => testNumbers.numberChecker('str')).to.throw(Error, "The input is not a number!");
        });
    });
    describe("Test averageSumArray(arr)", function () {
        it("Happy path", function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([1, 1, 1])).to.equal(1);
            expect(testNumbers.averageSumArray([-2, 2])).to.equal(0);
            expect(testNumbers.averageSumArray([2, -2])).to.equal(0);
            expect(testNumbers.averageSumArray([0, 0])).to.equal(0);
            expect(testNumbers.averageSumArray([1.5, 2.5])).to.equal(2);
        });
    });
});


