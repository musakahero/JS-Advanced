function extractText() {
    let arrayOfElements = Array.from(getElementsByTagName('li'));
    let result = arrayOfElements.map(e => e.textContent).join('\n');
    document.getElementById('result').value = result;
}

//second solution

// function extractText() {
//     let col = document.getElementsByTagName('li');
//     let newText = '';

//     for (const el of col) {
//         let text = el.textContent;
//         newText += text;
//     }
//     document.getElementsByTagName('textarea')[0].value = newText;
// }