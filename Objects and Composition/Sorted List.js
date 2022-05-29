function createSortedList() {
    let obj = {
        size: 0,
        arr: [],
        add(element) {
            obj.arr.push(element);
            obj.size++;
            obj.arr.sort((a, b) => a - b);
        },
        remove(elIndex) {
            if(obj.arr[elIndex]==undefined ){
                return undefined;
            } else {    
                obj.arr.splice(elIndex, 1);
                obj.size--;
                obj.arr.sort((a, b) => a - b);
            } 
            
        },
        get(elIndex) { 
            if(obj.arr[elIndex]==undefined) {
                return undefined;
            } else {
                return obj.arr[elIndex];
            }
        }
    };

    return obj;
}

//input
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
