function solve(input){
    let arrResult = [];

    for (let i = 1; i<input.length; i++ ) {

        let tokens = input[i].split(/ ?\| ?/);
        tokens.shift();
        tokens.pop();
        
        //console.log(tokens);
        let [town, latitude, longitude] = tokens;

        let objResult = {
            Town:town,
            Latitude:Number(Number(latitude).toFixed(2)),
            Longitude:Number(Number(longitude).toFixed(2))
        };

        arrResult.push(objResult);
    }
    
    console.log(JSON.stringify(arrResult));

    //console.log(tokens);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

solve([' | Town | Latitude | Longitude|'])