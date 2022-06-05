function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', onMouseOver);

    function onMouseOver(ev){
        
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
        //gradient.removeEventListener('mousemove', onMouseOver)
    }
}