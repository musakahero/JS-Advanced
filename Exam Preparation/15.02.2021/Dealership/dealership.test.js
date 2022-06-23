describe("Tests", function () {
    describe("newCarCost(oldCarModel, newCarPrice)", function () {

        it("Happy path", function () {
            expect(dealership.newCarCost('str', 200)).to.equal(200);
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
            expect(dealership.newCarCost('Audi A8 D5', 50000)).to.equal(25000);
        });
    });

    describe("carEquipment(extrasArr, indexArr) ", function () {
        it("Happy path", function () {
            expect(dealership.carEquipment(['a', 'b'],[0])).to.deep.equal(['a']);
            expect(dealership.carEquipment(['a', 'b'],[0, 1])).to.deep.equal(['a', 'b']);
            expect(dealership.carEquipment(['a', 'b', 'c'],[0, 2])).to.deep.equal(['a', 'c']);
        });
    });

    describe("euroCategory(category)", function () {

        it("Happy path", function () {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
    });

});