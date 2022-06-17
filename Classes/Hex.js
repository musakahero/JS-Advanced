class Hex {

    constructor(num) {
        if (typeof (num) === 'number') {
            this.value = num;
        }

    }

    valueOf = () => this.value;

    toString = () => '0x' + this.value.toString(16).toUpperCase();

    plus(num) {
        if (this.value) {
            return new Hex(this.value + parseInt(num))
        }
    }
    minus(num) {
        if (this.value) {
            return new Hex(this.value - parseInt(num))
        }
    }
    static parse(str) {
        return parseInt('0x' + str);
    }
    parse(str) {
        return parseInt('0x' + str);
    }
}

//input

let FF = new Hex(255);
//console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
console.log(a.plus(c).toString());
console.log(a.minus(b).toString());


// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
// console.log(FF.parse('AAA'));

