function validate() {
    document.getElementById('company').addEventListener('change',()=>{
        let infoComapny = document.getElementById('companyInfo')
        if(document.getElementById('company').checked == false){
            infoComapny.style.display = 'none'
        }else{
            infoComapny.style.display = 'block'
        }
    })
 
    document.getElementById('submit').addEventListener('click',onClick)
 
    function onClick(event) {
        event.preventDefault()
        let invalidItems = []
        invalidItems.forEach(item => item.style.borderColor = '')
 
        let companyCheckBox = document.querySelector('#company')
 
        let username = document.getElementById('username')
        username.style.borderColor = ''
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/
        if (!usernamePattern.test(username.value)) {
            invalidItems.push(username)
        }
 
        let email = document.getElementById('email')
        let emailPattern = /^[^@.]+@[^@]*\.[^@]+$/
        email.style.borderColor = ''
        if (!emailPattern.test(email.value)) {
            invalidItems.push(email)
        }
 
 
        let password = document.getElementById('password')
        let confirmPassword = document.getElementById('confirm-password')
        let passwordPattern = /^[\w]{5,15}$/
        password.style.borderColor = ''
        confirmPassword.style.borderColor = ''
        if (!passwordPattern.test(password.value) || confirmPassword.value != password.value) {
            invalidItems.push(password)
            invalidItems.push(confirmPassword)
        }
 
        if (companyCheckBox.checked) {
            let companyNumber = document.getElementById('companyNumber')
            companyNumber.style.borderColor = ''
            let companyPattern = /^[0-9]{4}$/
            if (!companyPattern.test(companyNumber.value)) {
                invalidItems.push(companyNumber)
            }
        }
 
        invalidItems.forEach(item => item.style.borderColor = 'red')
        !invalidItems.length ? document.querySelector('#valid').style.display = 'block':
        document.querySelector('#valid').style.display='none';
        if (!invalidItems.length) {
 
        }
    }
 
}