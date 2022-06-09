function solution() {
    const recipies = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'fat': 10,
            'carbohydrate': 10,
            'flavour': 10
        }
    };
    let storage = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    function management(input) {
        const tokens = input.split(' ');
        const cmd = tokens[0];

        const actions = {
            restock,
            prepare,
            report
        };

        //call the appropriate action
        return actions[cmd]();

        //restock func
        function restock() {
            let microelement = tokens[1];
            let quantity = Number(tokens[2]);
            storage[microelement] += quantity;
            return 'Success';
        };
        //prepare func
        function prepare() {
            let recipe = tokens[1];
            let quantity = Number(tokens[2]);
            

            for (const ingr in recipies[recipe]) {
                let neededIngrQty = recipies[recipe][ingr] * quantity;

                if (storage[ingr] < neededIngrQty) {
                    return `Error: not enough ${ingr} in stock`;
                }

                storage[ingr] -= neededIngrQty;
            }

            return 'Success';
        };
        //report func
        function report() {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    }

    return management;
}

// solution('restock flavour 50');
// solution('prepare lemonade 4');
// solution('report');
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

// manager('restock flavour 50');
// manager('prepare lemonade 4');
// manager('restock carbohydrate 10');
// manager('restock flavour 10');
// manager('prepare apple 1');
// manager('restock fat 10');
// manager('prepare burger 1');
// manager('report');
