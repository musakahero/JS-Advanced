function tictactoe(moves) {

    let board =
        [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let isPlayerXWinning = false;
    let isPlayerOWinning = false;
    let isNoFreeSpots = false;
    let counter = 0;

    for (const move of moves) {

        let rowMove = Number(move.split(' ')[0]);
        let colMove = Number(move.split(' ')[1]);

        //if place is free - mark
        if (board[rowMove][colMove] == false) {

            if (counter % 2 == 0) {
                board[rowMove][colMove] = 'X';
            } else {
                board[rowMove][colMove] = 'O';
            }

            //signal through counter that a move has been made
            counter++;
            //place isn't free - print error
        } else {
            console.log('This place is already taken. Please choose another!');
        }


        //check rows
        for (let row = 0; row < 3; row++) {
            if (board[row].every(x => x == 'X')) {
                isPlayerXWinning = true;
                break;
            } else if (board[row].every(x => x == 'O')) {
                isPlayerOWinning = true;
                break;
            }
        }

        //check columns
        for (let col = 0; col < 3; col++) {
            let colArray = [];
            for (let row = 0; row < 3; row++) {
                colArray.push(board[row][col]);
            }
            if (colArray.every(x => x == 'X')) {
                isPlayerXWinning = true;
                break;
            } else if (colArray.every(x => x == 'O')) {
                isPlayerOWinning = true;
                break;
            }
        }

        //check diagonals
        //left to right
        let diagArr = [];
        let squarePos = 0;
        for (let row = 0; row < 3; row++) {
            diagArr.push(board[row][squarePos]);
            squarePos++;
        }
        if (diagArr.every(x => x == 'X')) {
            isPlayerXWinning = true;
        } else if (diagArr.every(x => x == 'O')) {
            isPlayerOWinning = true;
        }


        //right to left
        diagArr = [];
        squarePos = 2;
        for (let row = 0; row < 3; row++) {
            diagArr.push(board[row][squarePos]);
            squarePos--;
        }
        if (diagArr.every(x => x == 'X')) {
            isPlayerXWinning = true;
        } else if (diagArr.every(x => x == 'O')) {
            isPlayerOWinning = true;
        }

        if (isPlayerXWinning) {
            console.log('Player X wins!');
            break;
        } else if (isPlayerOWinning) {
            console.log('Player O wins!');
            break;
        }


        

        //no free spots
        for (let row = 0; row < 3; row++) {
            isNoFreeSpots = true;

            if (board[row].includes(false)) {
                isNoFreeSpots = false;
                break;
            }
        }
        if (isNoFreeSpots) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
    }


    for (const row of board) {
        console.log(row.join('\t'));
    }

}

// tictactoe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]
// );

// tictactoe(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]
// );

// tictactoe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]
// );