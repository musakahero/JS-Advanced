const { expect } = require('chai');
const { StringBuilder } = require('./stringBuilder');

describe('Test class integrity', ()=> {
    it('Must be a class', ()=> {
        let newInst = new StringBuilder('string');
        let newFalse = new RegExp('str');
        expect(newInst instanceof StringBuilder).to.equal(true);
        expect(newFalse instanceof StringBuilder).to.equal(false);
    });
});
describe('Test instantiating', () => {
    it('Can be instantiated with a passed in string or without anything, else throw', () => {
        expect(()=>{
            let newInst = new StringBuilder();
        }).to.not.throw();
        expect(()=>{
            let newInst = new StringBuilder('string');
        }).to.not.throw();
        expect(()=>{
            let newInst = new StringBuilder(false);
        }).to.throw(TypeError, 'Argument must be a string');
        expect(()=>{
            let newInst = new StringBuilder(1);
        }).to.throw(TypeError, 'Argument must be a string');
        expect(()=>{
            let newInst = new StringBuilder([1]);
        }).to.throw(TypeError, 'Argument must be a string');
        //if arg is undefined
        let newInst = new StringBuilder(undefined);
        expect(Array.isArray(newInst._stringArray)).to.equal(true);
    });
})

describe('Test append', () => {
    it('Test append(string) to take string and append', () => {
        let newInst = new StringBuilder('string');
        newInst.append('abc');
        expect(newInst._stringArray.join('')).to.equal('stringabc');
    });
    it('Test append(string) to take empty str and append', () => {
        let newInst = new StringBuilder('');
        newInst.append('abc');
        expect(newInst._stringArray.join('')).to.equal('abc');
    });
    it('Test append(string) to throw if arg not string', () => {
        let newInst = new StringBuilder('string');
        
        expect(() => {newInst.append(123)}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.append(false)}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.append(['a', 'b'])}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.append(undefined)}).to.throw(TypeError, 'Argument must be a string');
    });
})

describe('Test prepend(string)', ()=>{
    it('Test prepend(string) to take string and prepend', () => {
        let newInst = new StringBuilder('string');
        newInst.prepend('abc');
        expect(newInst._stringArray.join('')).to.equal('abcstring');
    });
    it('Test append(string) to take empty str and append', () => {
        let newInst = new StringBuilder('');
        newInst.prepend('abc');
        expect(newInst._stringArray.join('')).to.equal('abc');
    });
    it('Test append(string) to throw if arg not string', () => {
        let newInst = new StringBuilder('string');
        
        expect(() => {newInst.prepend(123)}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.prepend(false)}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.prepend(['a', 'b'])}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.prepend(undefined)}).to.throw(TypeError, 'Argument must be a string');
    });
});

describe('Test insertAt(string, index)', () => {
    it('Test insertAt to take string and index(type string)', () => {
        let newInst = new StringBuilder('string');
        newInst.insertAt('abc', 1);
        expect(newInst._stringArray.join('')).to.equal('sabctring');
    });
    it('Test insertAt to take empty string 1st arg', () => {
        let newInst = new StringBuilder('string');
        newInst.insertAt('', 1);
        expect(newInst._stringArray.join('')).to.equal('string');
    });
    it('Test insertAt to throw if args not string', () => {
        let newInst = new StringBuilder('string');
        
        expect(() => {newInst.insertAt(123, 1)}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.insertAt(false, 1)}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.insertAt(['a', 'b'], 1)}).to.throw(TypeError, 'Argument must be a string');
        expect(() => {newInst.insertAt(undefined, 1)}).to.throw(TypeError, 'Argument must be a string');
    });
})

describe('Test remove(startIndex, length)', () => {
    it('Test remove to take string and index(type string)', () => {
        let newInst = new StringBuilder('string');
        newInst.remove(1, 2);
        expect(newInst._stringArray.join('')).to.equal('sing');
    });
})

describe('Test toString()', () => {
    it('Test toString() to return this._stringArray.join(\'\')', () => {
        let newInst = new StringBuilder('string');
        expect(newInst.toString()).to.equal(newInst._stringArray.join(''));
    });
})