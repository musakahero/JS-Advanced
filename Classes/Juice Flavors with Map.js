function solve(input) {
    let storage = new Map();
    let juiceLeft = new Map();

    //receive fruits and quantity - iterate through arr
    for (const el of input) {
        let [fruit, qty] = el.split(' => ');
        qty = Number(qty);
        
        
        if(!juiceLeft.has(fruit)){
            juiceLeft.set(fruit, 0);
        }

        let totalAmount = juiceLeft.get(fruit) + qty;

        if(totalAmount >= 1000){
            
            if(!storage.has(fruit)){
                storage.set(fruit, 0);
            };
            
            let newBottles = Math.trunc(totalAmount / 1000);
            let totalBottles = storage.get(fruit) + newBottles;
            storage.set(fruit, totalBottles);
        }

        juiceLeft.set(fruit, totalAmount%1000);
    }
    
    // //print
    for (const key of storage) {
        console.log(`${key[0]} => ${key[1]}`);
    }
}

// solve(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// );
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);
