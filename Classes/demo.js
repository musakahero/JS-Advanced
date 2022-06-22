let a = {name: 'Stanimir', salary:30}
let b = {name: 'Stan', salary:20}
let c = {name: 'Ivan', salary: 10}
let d = {name: 'Anton', salary: 20};

let arr = [a, b, c, d];

arr.sort((a,b) => {
    if(a.salary > b.salary){
        return -1;
    } else if (a.salary === b.salary){
        return a.name.localeCompare(b.name);
    } else if (a.salary < b.salary){
        return 1;
    }
})

for (const item of arr) {
    console.log(item.name + item.salary);
}