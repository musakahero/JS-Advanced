function solve(input) {
    let storage = {};
    let juiceLeft = {};

    //receive fruits and quantity - iterate through arr
    for (const el of input) {
        let [fruit, qty] = el.split(' => ');
        qty = Number(qty);
        
        if(!juiceLeft.hasOwnProperty(fruit)){
            juiceLeft[fruit] = 0;
        }

        juiceLeft[fruit] += qty;

        if (juiceLeft[fruit] >= 1000) {
            if(!storage.hasOwnProperty(fruit)){
                storage[fruit] = 0;
            }
            
            let newBottles = Math.trunc(juiceLeft[fruit]/1000);
            storage[fruit] += newBottles;
            juiceLeft[fruit] -= newBottles * 1000;
        } 
        
    }

    //print
    for (const fruit in storage) {
        console.log(`${fruit} => ${storage[fruit]}`);
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);