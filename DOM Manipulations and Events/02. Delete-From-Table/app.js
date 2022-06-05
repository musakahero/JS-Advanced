function deleteByEmail() {
    let input = document.querySelector('body label input').value;

    let allEmails = Array.from(document.querySelectorAll('table tbody td:nth-child(2)'));

    let result = document.getElementById('result');

    let msg = '';

    for (let i = 0; i < allEmails.length; i++) {

        if(allEmails[i].textContent.includes(input)){
            
            let elToRemove = allEmails[i].parentElement;
            
            elToRemove.parentElement.removeChild(elToRemove);

            msg = 'Deleted.';

            //console.log(result);
            break;
        } else {
            msg = 'Not found.';
        }
    }

    result.textContent = msg;
    
}