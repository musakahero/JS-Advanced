function solve(arr) {
    let result = [];

    result.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let currBiggest = result[result.length - 1];

        if (arr[i] >= currBiggest) {
            result.push(arr[i]);
        }
    }

    //    console.log(result);

    return result;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);

solve([1,
    2,
    3,
    4]
);

solve([20,
    3,
    2,
    15,
    6,
    1]
);