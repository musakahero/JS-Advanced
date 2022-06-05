function addItem() {

    //add new item to list
    let textToAdd = document.getElementById('newItemText').value;
    let newElement = document.createElement('li');
    newElement.textContent = textToAdd;

    document.getElementById('items').appendChild(newElement);

    //create delete link button
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', () => newElement.remove());

    newElement.appendChild(deleteLink);

}