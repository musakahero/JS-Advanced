function solve(matrixAsStrings) {

    let diag0 = [];
    let diag1 = [];

    let matrix = [];
    for (const string of matrixAsStrings) {
        matrix.push(string.split(' ').map(Number));
    }

    for(let row = 0; row < matrix.length; row++){
        diag0.push(matrix[row][row]);
    }

        let colNum = matrix[0].length-1;
    for(let row = 0; row < matrix.length; row++){
        diag1.push(matrix[row][colNum]);
        colNum--;
    }

    let sumOfDiag0 = sum(diag0);
    let sumOfDiag1 = sum(diag1);

    if(sumOfDiag0 == sumOfDiag1){
        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix[row].length; col++){
                if(row == col){
                    continue;
                }
                if(row + col == matrix.length-1){
                    continue;
                }

                matrix[row][col] = sumOfDiag0;
            }
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }


    function sum(arrayOfNumbers) {
        let sum = arrayOfNumbers.reduce(
            function (previousValue, currentValue) {
            return previousValue + currentValue
          }, 0)

        return sum;
    }
}

solve(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'])

/* 
'5   3   12  3   1',
'11  4   23  2   5',
'101 12  3   21  10',
'1   4   5   2   2',
'5   22  33  11  1')
*/