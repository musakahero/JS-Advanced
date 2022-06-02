function generateReport() {
    let colCollection = []; //array to hold the data of each column
    let arrWithTableHeads = []; //array to hold the table head rows
    let mainArr = []; //array to hold the final objects as the result

    //select all thead th elements
    let headCols = Array.from(document.querySelectorAll('thead th'));

    for (let i = 0; i < headCols.length; i++) {

        //if checkbox is checked
        if (headCols[i].querySelector('input').checked) {

            //get all row data from each selected column then push it to colCollection array
            let bodyCol = Array.from(document.querySelectorAll(`tbody tr td:nth-child(${i + 1})`));
            colCollection.push(bodyCol);

            //get current table head name from the name attribute and push it to the arrWithTableHeads 
            let tableHead = headCols[i].querySelector('input').getAttribute("name");
            arrWithTableHeads.push(tableHead);

        }
    }

    //arrWithTableHeads = arrWithTableHeads.map(e => e.trim());

    //create as many objects in the mainArr as required and then fill them with the data
    for (let i = 0; i < colCollection[0].length; i++) {
        mainArr.push({});
    }

    for (let i = 0; i < colCollection.length; i++) { 

        for (let j = 0; j < mainArr.length; j++) {            
            mainArr[j][arrWithTableHeads[i]] = colCollection
            [i][j].textContent;
        }
    }

    //get result in JSON format
    let result = JSON.stringify(mainArr);

    //DOM output display
    document.getElementById('output').value = result;

}