function solve(input) {
    let result = new Map();

    for (const el of input) {
        let [carBrand, carModel, carAmount] = el.split(' | ');
        carAmount = Number(carAmount);

        if(!result.has(carBrand)){
            result.set(carBrand, new Map());
        }
        if(!result.get(carBrand).has(carModel)){
            result.get(carBrand).set(carModel, 0);
        }
       result.get(carBrand).set(carModel, (result.get(carBrand).get(carModel)) + carAmount)
    }

    for (const brand of result) {
        console.log(brand[0]);
        for (const model of result.get(brand[0])) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }
    }
}


//input
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);