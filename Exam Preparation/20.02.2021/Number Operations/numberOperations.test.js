describe("Tests", function () {
    describe("Test powNumber(num)", function () {
        it("Happy path", function () {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(2.2)).to.equal(2.2*2.2);
            expect(numberOperations.powNumber(-3)).to.equal(9);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber('2')).to.equal(4);
            expect(numberOperations.powNumber(false)).to.equal(0);
            expect(numberOperations.powNumber(null)).to.equal(0);
        });
    });

    describe("numberChecker(input)", function () {
        it("Happy path", function () {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100.1)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(false)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(null)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-10)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('')).to.equal('The number is lower than 100!');
        });
        it("if isNaN - throw Error", function () {
            expect(()=>numberOperations.numberChecker(undefined)).to.throw(Error);
            expect(()=>numberOperations.numberChecker(NaN)).to.throw(Error);
            expect(()=>numberOperations.numberChecker(NaN)).to.throw(Error);
            expect(()=>numberOperations.numberChecker('str')).to.throw(Error);
        });
    });

    describe("Test sumArrays(array1, array2)", function () {
        it("Happy path", function () {
            expect(numberOperations.sumArrays([1,2], [2,1])).to.deep.equal([3,3]);
            expect(numberOperations.sumArrays([0,2], [2,0])).to.deep.equal([2,2]);
            expect(numberOperations.sumArrays([-1,-3], [-1,-3])).to.deep.equal([-2,-6]);
            expect(numberOperations.sumArrays([3],[4])).to.deep.equal([7]);
            expect(numberOperations.sumArrays([3,2],[4])).to.deep.equal([7, 2]);
            expect(numberOperations.sumArrays([3],[4, 3])).to.deep.equal([7, 3]);
        });
    });
});
