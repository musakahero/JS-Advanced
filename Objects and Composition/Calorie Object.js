function solve(propsArr) {
    let result = {};

    for(let i = 0; i < propsArr.length-1; i++){
        if(i%2 == 0){
            result[propsArr[i]] = Number(propsArr[i+1]);
        }
    }

    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])	
