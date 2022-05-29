function solve(input) {
    let resultObj = {};

    for (const townDetails of input) {
        let [town, population] = townDetails.split(' <-> ');
        population = Number(population);
        
        // if(resultObj.hasOwnProperty(town)){
        //     resultObj[town] += population;
        // } else {
        //     resultObj[town] = population;
        // }

        if(resultObj.hasOwnProperty(town)){
            population += resultObj[town];
        }

        resultObj[town] = population;
    }

    for (const town in resultObj) {
        console.log(`${town} : ${resultObj[town]}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

 console.log('==========');

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);
