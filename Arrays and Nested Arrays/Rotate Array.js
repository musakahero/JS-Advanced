function solve(arr, numOfRotations){
    let counter = 0;

    while(counter<numOfRotations){
        let removedElement = arr.pop();
        arr.unshift(removedElement);
        counter++;
    }

    console.log(arr.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
)

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);