function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', checkEmail);

    function checkEmail(){
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if(!pattern.test(inputField.value)){
            inputField.className = 'error';
            console.log(inputField.value);
        } else {
            inputField.classList.remove('error');
        }
    }
}