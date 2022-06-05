function addItem() {
    //console.log('TODO:...');

    let textToAdd = document.getElementById('newItemText').value;
    let newElement = document.createElement('li');
    newElement.textContent = textToAdd;

    document.getElementById('items').appendChild(newElement);
}