function toggle() {
    
    let hiddenDiv = document.getElementById('extra')
    let button = document.querySelector('.button');

    if(button.textContent == 'More'){
        hiddenDiv.style.display = 'block';
        button.textContent = 'Less';
        return;

    } else if(button.textContent == 'Less'){
        hiddenDiv.style.display = 'none';
        button.textContent = 'More';
        return;
    }
    
}