
describe("Tests", function () {
    describe("isItExpensive(issue)", function () {

        it("Happy path", function () {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('a')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe("discount(numberOfParts, totalPrice)", function () {

        it("Happy path - numOfParts >2 && <=7", function () {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
        });
        it("Happy path - numOfParts =2", function () {
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
        });
        it("Happy path - numOfParts >7", function () {
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`);
        });
        it("Invalid input", function () {
            expect(() => carService.discount('1', 100)).to.throw(Error, `Invalid input`);
            expect(() => carService.discount(1, '100')).to.throw(Error, `Invalid input`);
            expect(() => carService.discount('1', '100')).to.throw(Error, `Invalid input`);
            expect(() => carService.discount('1')).to.throw(Error, `Invalid input`);
            expect(() => carService.discount(1)).to.throw(Error, `Invalid input`);
        });

    });

    describe("partsToBuy(partsCatalog, neededParts)", function () {

        it("Happy path - both needed items are in catalogue", function () {
            expect(carService.partsToBuy(
                [{ part: 'a', price: 145 }, { part: 'b', price: 230 }],
                ['a', 'b']
            )).to.equal(375);
        });
        it("Happy path - only 1 needed item is in catalogue", function () {
            expect(carService.partsToBuy(
                [{ part: 'a', price: 145 }, { part: 'b', price: 230 }],
                ['a', 'c']
            )).to.equal(145);
        });
        it("Catalogue is empty", function () {
            expect(carService.partsToBuy(
                [],
                ['a', 'c']
            )).to.equal(0);
        });
        it("Invalid input", function () {
            expect(() => carService.partsToBuy(
                'a, b',
                ['a', 'b']
            )).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy(
                [{ part: 'a', price: 145 }, { part: 'b', price: 230 }],
                'str'
            )).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy(
                'abc',
                'str'
            )).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy(
                [{ part: 'a', price: 145 }, { part: 'b', price: 230 }]
            )).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy(
                'abc'
            )).to.throw(Error, 'Invalid input');
        });
    });
});