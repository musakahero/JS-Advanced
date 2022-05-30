function colorize() {
    let rows = document.querySelectorAll('tr');

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.background = 'teal';
    }
}

// second solution
// function colorize(){
//     let rows = [...document.querySelectorAll('tr:nth-child(2n)')];

//     rows.forEach(e => e.style.background='teal');

// }