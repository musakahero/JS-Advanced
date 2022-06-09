function getFibonator() {
    let currResult = 0;
    let a = 0;
    let b = 1;

    function nextNum() {
        
        currResult = a + b;
        a = b;
        b = currResult;

        return a;
    }  

    return nextNum;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
