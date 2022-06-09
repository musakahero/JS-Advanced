function solve(arr, str){
    let result = [];

    if(str == 'asc'){
        result = arr.sort((a,b)=>a-b);
    } else if (str == 'desc'){
        result = arr.sort((a,b)=>b-a);
    }

    return result;
    //console.log(result);
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');