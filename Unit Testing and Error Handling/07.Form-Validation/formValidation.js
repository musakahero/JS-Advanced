function validate() {
   
    //DOM references
    //const usernameField = document.querySelector('#username');
    const passwordField = document.querySelector('#password');
    const confirmPassField = document.querySelector('#confirm-password');
    //const emailField = document.querySelector('#email');
    const isCompanyBox = document.querySelector('#company');
    const companyInfoSection = document.querySelector('#companyInfo');
    //const companyNumField = document.querySelector('#companyNumber');
    const validPrompt = document.querySelector('#valid');
    const submitBtn = document.querySelector('#submit');

    //validation patterns 
    //const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    //const passwordPattern = /^\w{5,15}$/;
    //const emailPattern = /^.*@.*\..*$/;
    //const companyNumPattern = /^[1-9][0-9]{3}$/;

    //event listeners
    isCompanyBox.addEventListener('change', onTick);
    submitBtn.addEventListener('click', onSubmit);

    //function declarations
    function onTick() {
        if (isCompanyBox.checked) {
            companyInfoSection.style.display = 'block';
        } else {
            companyInfoSection.style.display = 'none';
        }
    }

    function onSubmit(ev) {
        ev.preventDefault();
        let valid = true;
        
        regexTest(/^[a-zA-Z0-9]{3,20}$/, document.querySelector('#username'));
        regexTest(/^.*@.*\..*$/, document.querySelector('#email'));

        //check if password fields match
        if (confirmPassField.value != passwordField.value || !/^\w{5,15}$/.test(passwordField.value)) {
            valid = false;
            passwordField.removeAttribute('style');
            passwordField.style['border-color'] = 'red';
            confirmPassField.removeAttribute('style');
            confirmPassField.style['border-color'] = 'red';
        } else {
            passwordField.style.border = 'none';
            confirmPassField.style.border = 'none';
        }
        //regexTest(/^\w{5,15}$/, passwordField);

        //if companyBox is checked, validate companyNumber too
        if (isCompanyBox.checked) {
            regexTest(/^[1-9][0-9]{3}$/, document.querySelector('#companyNumber'));
        }

        if (valid == false) {
            validPrompt.style.display = 'none';
        } else {
            validPrompt.style.display = 'block';
        }

        function regexTest(pattern, fieldEl) {
            if (!pattern.test(fieldEl.value)) {
                valid = false;
                fieldEl.removeAttribute('style');
                fieldEl.style['border-color'] = 'red';
            } else {
                fieldEl.style.border = 'none';
            }
        }
    }

    
}

