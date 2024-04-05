window.addEventListener("load", solve);

function solve() {
  //inputs
  let inputs = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  }
  //sections
  let tbody = document.getElementById('table-body');
  let carsList = document.getElementById('cars-list');
  let profitSection = document.getElementById('profit');
  let total = 0;

  //buttons
  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', onPublish);


  function onPublish(e) {
    e.preventDefault();

    //keep values
    let make = inputs.make.value;
    let model = inputs.model.value;
    let year = inputs.year.value;
    let fuel = inputs.fuel.value;
    let originalCost = Number(inputs.originalCost.value);
    let sellingPrice = Number(inputs.sellingPrice.value);

    //validate
    if (originalCost > sellingPrice || make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice == '') {
      return;
    };
    //create record
    let tr = createEl('tr', '', tbody, 'row');
    createEl('td', `${make}`, tr);
    createEl('td', `${model}`, tr);
    createEl('td', `${year}`, tr);
    createEl('td', `${fuel}`, tr);
    createEl('td', `${originalCost}`, tr);
    createEl('td', `${sellingPrice}`, tr);
    let btnsTd = createEl('td', '', tr);
    //buttons
    let editBtn = createEl('button', 'Edit', btnsTd, 'action-btn edit');
    let sellBtn = createEl('button', 'Sell', btnsTd, 'action-btn sell');

    clearInput();
    //edit func
    editBtn.addEventListener('click', onEdit);
    function onEdit() {
      //restore inputs
      inputs.make.value = make;
      inputs.model.value = model;
      inputs.year.value = year;
      inputs.fuel.value = fuel;
      inputs.originalCost.value = originalCost;
      inputs.sellingPrice.value = sellingPrice;
      //remove tr
      tr.remove();
    }
    //sell func
    sellBtn.addEventListener('click', onSell);
    function onSell(){
      //remove record
      tr.remove();
      //create new record
      let li = createEl('li', '', carsList, 'each-list');
      createEl('span', `${make} ${model}`, li);
      createEl('span', `${year}`, li);
      let currProfit = sellingPrice - originalCost;
      createEl('span', `${currProfit}`, li);
      //add to total and display profit
      total += currProfit;
      profitSection.textContent = `${total.toFixed(2)}`;
    }
  }
  function clearInput() {
    inputs.make.value = '';
    inputs.model.value = '';
    inputs.year.value = '';
    inputs.fuel.value = '';
    inputs.originalCost.value = '';
    inputs.sellingPrice.value = '';
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
