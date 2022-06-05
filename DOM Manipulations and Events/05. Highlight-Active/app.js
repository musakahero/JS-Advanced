function focused() {
    Array.from(document.querySelectorAll('input'))
    .forEach(i => { 
        i.addEventListener('blur', onBlur);
        i.addEventListener('focus', onFocus);
    });

    function onFocus(ev){
        ev.target.parentElement.className = 'focused';
    }

    function onBlur(ev){
        ev.target.parentElement.className = 'blurred';
        
    }
}