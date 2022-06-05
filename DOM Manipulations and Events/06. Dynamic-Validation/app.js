function validate() {
    let inputField = document.getElementById('email');

    inputField.addEventListener('change', onChange);

    function onChange(ev) {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/;

        if(!pattern.test(inputField.value)){
            inputField.className = 'error';
        } else {
            inputField.className = '';
        }
    }
}