function addItem() {
    let textValue = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;


    let newOption = document.createElement('option');
    newOption.textContent = textValue;
    newOption.value = itemValue;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

    document.getElementById('menu').appendChild(newOption);
    
}