const { expect } = require('chai');
const { isOddOrEven } = require('./isOddOrEven');

describe('Test Suite', () => {
    it('Test with non-string type', () => {
        expect(isOddOrEven(23)).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
    });

    it('Test with odd-length string', () => {
        expect(isOddOrEven('baba')).to.equal('even');
    });

    it('Test with even-length string', () => {
        expect(isOddOrEven('aba')).to.equal('odd');
    });

    it('Test with multiple strings in a row', () => {
        expect(isOddOrEven('aba', 'babab', 'abba')).to.equal('odd');
    });

});
    
