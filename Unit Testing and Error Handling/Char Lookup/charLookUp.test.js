const { expect } = require('chai');
const { lookupChar } = require('./charLookUp');

describe('Test suite', ()=> {
    it('Testing with correct type of parameters', () => {
        expect(lookupChar('string', 1)).to.equal('t');
    });

    it('Testing with floating point number index', () => {
        expect(lookupChar('string', 1.24)).to.equal(undefined);
    });

    it('Testing with non-string 1st input and non-number 2nd input', () => {  
        expect(lookupChar('1', '1')).to.equal(undefined);
        expect(lookupChar(1, 1)).to.equal(undefined);
        expect(lookupChar('string', 'string')).to.equal(undefined);
        expect(lookupChar(1, 'string')).to.equal(undefined);
    });

    it('Testing with index above upper bound', () => {
        expect(lookupChar('string', 10)).to.equal('Incorrect index');
    });

    it('Testing with index under lower bound', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    });

    it('Testing with index equal to string length', () => {
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    });
});