function solve(instrSet) {
    let operator = '';
    let operands = [];

    for (const item of instrSet) {
        if (typeof (item) == 'number') {
            operands.push(item);
        } else {
            operator = item;

            if (operands.length < 2) {
                return console.log('Error: not enough operands!');
                
            } else {
                let lastTwoNumbers = [];
                lastTwoNumbers.push(operands.pop());
                lastTwoNumbers.unshift(operands.pop());

                let result = 0;
                operator == '+' ? result = lastTwoNumbers[0] + lastTwoNumbers[1]
                    : operator == '-' ? result = lastTwoNumbers[0] - lastTwoNumbers[1]
                        : operator == '*' ? result = lastTwoNumbers[0] * lastTwoNumbers[1]
                            : operator == '/' ? result = lastTwoNumbers[0] / lastTwoNumbers[1]
                                : undefined;

                operands.push(result);
            }

        }
    }

    if (operands.length == 1) {
        console.log(operands[0]);
    } else {
        console.log('Error: too many operands!');
    }

}

// solve([3,
//     4,
//     '+']
// );
// solve([5,
//     3,
//     4,
//     '*',
//     '-']
// );

solve([15,
    '/']
   );