// function sumTable() {
//     let rows = Array.from(document.querySelectorAll('tr'));

//     let total = 0;
//     let sum = document.getElementById('sum');

//     for (let i = 1; i < rows.length - 1; i++) {
//         let a = rows[i].querySelector('td:nth-child(2)');
//         let numberToAdd = Number(a.textContent);
//         total += numberToAdd;
//     }

//     sum.textContent = total;
// }

function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr')).slice(1,-1);
    let sum = 0;

    for(let row of rows){
        let numToAdd = Number(row.lastElementChild.textContent);
        sum += numToAdd;
    }

    document.getElementById('sum').textContent = sum;

}