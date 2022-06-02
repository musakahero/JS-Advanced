function solve() {

    //DOM modifications

    //add onclick
    document.getElementById('container').lastElementChild.setAttribute('onclick','solve()');
    
    //remove auto-run solve()
    const body = document.querySelector('body');
    // body.removeChild(body.lastElementChild);
    // body.lastElementChild.textContent = '';
    body.lastElementChild.innerHTML = '';
    console.log(body.lastElementChild);


    //take input
    let numToConvert = document.getElementById('input').value;

    let convertedNum = '';
    //dec to binary

    
    while (numToConvert > 0) {
        convertedNum += numToConvert % 2;
        numToConvert = Math.floor(numToConvert / 2);
    }

    let result = convertedNum.split('').reverse().join('');
    console.log(result);
    
}