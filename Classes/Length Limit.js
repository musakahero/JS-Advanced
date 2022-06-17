class Stringer{
    constructor(str, length) {
        this.initialString = str;
        this.innerString = str;
        this.innerLength = Number(length);
    }

    increase(length){
        this.innerLength += Number(length);
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    };
    decrease(length){
        this.innerLength -= Number(length);
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    toString(){
        if(this.initialString.length > this.innerLength){
            let diff = this.initialString.length - this.innerLength;
            let newStr = this.initialString.split('');
            newStr.splice(-diff);
            return newStr.join('') + '...';
        } else if(this.initialString.length == 0){
            return '...';
        } else {
            return this.initialString;
        } 
       
    }
}

//input
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
