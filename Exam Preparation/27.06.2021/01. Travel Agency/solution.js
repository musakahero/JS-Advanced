window.addEventListener('load', solution);

function solution() {
  let inputs = {
    fname: document.getElementById('fname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    address: document.getElementById('address'),
    code: document.getElementById('code')
  };

  let previewSection = document.getElementById('infoPreview');
  let blockDiv = document.getElementById('block');
  let submitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');
  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(ev) {
    ev.preventDefault();

    //keep values
    let name = inputs.fname.value;
    let email = inputs.email.value;
    let phone = inputs.phone.value;
    let address = inputs.address.value;
    let code = inputs.code.value;

    //validate
    if (name == '' || email == '') {
      return;
    }

    createEl('li', `Full Name: ${name}`, previewSection);
    createEl('li', `Email: ${email}`, previewSection);
    createEl('li', `Phone Number: ${phone}`, previewSection);
    createEl('li', `Address: ${address}`, previewSection);
    createEl('li', `Postal Code: ${code}`, previewSection);

    clearInput();
    //enable/disable buttons
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    //edit Btn
    editBtn.addEventListener('click', onEdit);
    function onEdit() {
      //fill input fields again
      inputs.fname.value = name;
      inputs.email.value = email;
      inputs.phone.value = phone;
      inputs.address.value = address;
      inputs.code.value = code;
      //enable/disable buttons
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
      //clear previewSection
      previewSection.innerHTML = '';
    }
    //continue Btn
    continueBtn.addEventListener('click', onContinue);
    function onContinue() {
      blockDiv.innerHTML = '';
      createEl('h3', 'Thank you for your reservation!', blockDiv)
    }

  }

  function clearInput() {
    inputs.fname.value = '';
    inputs.email.value = '';
    inputs.phone.value = '';
    inputs.address.value = '';
    inputs.code.value = '';
  }
  function createEl(type, content, parentEl, className) {
    const element = document.createElement(type);
    element.textContent = content;

    if (className) {
      element.className = className;
    }

    parentEl.appendChild(element);
    return element;
  }
}
