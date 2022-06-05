function solve() {
    
    document.querySelector('tfoot button').addEventListener('click', onCheck);
    document.querySelector('tfoot button:nth-of-type(2)').addEventListener('click', onClear);

    let table = document.querySelector('table');
    let pInsideCheckDiv = document.querySelector('#check p');

    function onCheck() {
        let isWon = true;

        //check rows
        let allRows = Array.from(document.querySelectorAll('tbody tr'));

        for (const row of allRows) {
            let arrOfElements = Array.from(row.querySelectorAll('td input')).map(e => e.value);

            let setOfElements = new Set(arrOfElements);
            
            if (setOfElements.size != 3) {
                isWon = false;
            }
            
        }

        //check columns
        let col1Arr = Array.from(document.querySelectorAll('tbody td:nth-of-type(1) input')).map(e => e.value);
        let col1Set = new Set(col1Arr);

        let col2Arr = Array.from(document.querySelectorAll('tbody td:nth-of-type(2) input')).map(e => e.value);
        let col2Set = new Set(col2Arr);

        let col3Arr = Array.from(document.querySelectorAll('tbody td:nth-of-type(3) input')).map(e => e.value);
        let col3Set = new Set(col3Arr);

        if (col1Set.size != 3 || col2Set.size != 3 || col3Set.size != 3) {
            isWon = false;
        }

        if(isWon){
            table.style.border = '2px solid green';
            pInsideCheckDiv.textContent = 'You solve it! Congratulations!';
            pInsideCheckDiv.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            pInsideCheckDiv.textContent = 'NOP! You are not done yet...';
            pInsideCheckDiv.style.color = 'red';
        }
    }

    function onClear() {
        let allInputs = Array.from(document.querySelectorAll('input'));

        for (const input of allInputs) {
            input.value = '';
        }
        table.style.border = ''
        pInsideCheckDiv.textContent = '';
    }

}