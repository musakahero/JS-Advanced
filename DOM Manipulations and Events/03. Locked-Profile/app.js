function lockedProfile() {
    document.querySelector('main').addEventListener('click', onClick);
    let isShown = false;

    function onClick(ev){
        if(ev.target.tagName == 'BUTTON'){
            let isUnlocked = ev.target.parentElement.querySelector('input[value="unlock"]').checked;
            
            if(isShown && isUnlocked){
                ev.target.parentElement.querySelector('div').style.display = 'none';
                isShown = false;
                ev.target.textContent = 'Show more';
                //console.log('is unlocked and is shown');

            } else if(!isShown && isUnlocked){  
                ev.target.parentElement.querySelector('div').style.display = 'block';
                isShown = true;
                ev.target.textContent = 'Hide it';
                //console.log('click');
            }           
        }
    }
}