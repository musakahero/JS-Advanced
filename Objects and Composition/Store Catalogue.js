function solve(input){
    let initials = new Set();
    //sort the initial input products for ease of use
    let sortedInput = input.sort((a,b) => a.localeCompare(b));

    //add all unique initials into a set
    for (const item of sortedInput) {
        initials.add(item[0]);
    }

    //turn initials Set into Array and sort it
    let initialsArr = [...initials];
    initialsArr.sort((a,b)=>a.localeCompare(b));

    //create dictionary and add the initials as keys for objects
    let dict = {};
    for (const init of initialsArr) {
        dict[init] = {};
    }

    //add the products and prod prices in the dict for each initial (key)
    for (const item of sortedInput) {
        let [productName, productPrice] = item.split(' : ');
        productPrice = Number(productPrice);
        dict[productName[0]][productName] = productPrice;
    }
    //print
    for (const initial in dict) {
        console.log(initial);

        for (const prod in dict[initial]) {
            console.log(`  ${prod}: ${dict[initial][prod]}`);
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

// solve(['Banana : 2',
// 'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']
// );