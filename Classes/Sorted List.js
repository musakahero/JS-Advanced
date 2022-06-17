class List {
    constructor() {
        this.arr = [];
        this.size = this.setSize();
    }
    add(element) {
        this.arr.push(element);
        this.sortArray(this.arr);
        this.size = this.setSize();
    };
    remove(index) {
        if (index >= 0 && index <= this.size - 1) {
            this.arr.splice(index, 1);
            this.sortArray(this.arr);
            this.size = this.setSize();
        }

    }
    get(index) {
        if (index >= 0 && index <= this.size - 1) {
            return this.arr[index];
        }

    };

    setSize() {
        return this.arr.length;
    };

    sortArray = (arr) => arr.sort((a, b) => a - b);
}

//input
// let list = new List();
// list.add(7);
// list.add(5);
// list.add(6);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

let list = new List();
list.add(5);
list.add(3);
list.remove(0);
list.get(0);
console.log(list.size);

