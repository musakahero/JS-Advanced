function solve(args) {
    let counter = {};

    for (const arg of solve.arguments) {
        let currType = typeof (arg);
        if (!counter.hasOwnProperty(currType)) {
            counter[currType] = 0;
        }
        counter[currType]++;

        console.log(`${typeof (arg)}: ${arg}`);
    }

    //
    let keys = Object.keys(counter);
    keys.sort((a,b)=>counter[b] - counter[a]);
    //console.log(keys);
    for (const key of keys) {
        console.log(`${key} = ${counter[key]}`);
    }
}

//solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob'}, 3.333, 9.999);