function solve(arr, num){
    let result = [];

    for(let i = 0; i < arr.length; i+=num){
        result.push(arr[i]);
    }

    //console.log(result);
    return result;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
);