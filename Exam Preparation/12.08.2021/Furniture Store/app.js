window.addEventListener('load', solve);

function solve() {
    let inputs = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price')
    };

    let tbody = document.getElementById('furniture-list');
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);
    let totalPrice = document.querySelector('.total-price');
    let total = 0;

    function onAdd(ev) {
        ev.preventDefault();
        //keep values
        let model = inputs.model.value;
        let year = inputs.year.value;
        let description = inputs.description.value;
        let price = inputs.price.value;

        //validate
        if (model == '' || year == '' || description == '' || price == '' || Number(year) < 0 || Number(price) < 0) {
            return;
        }

        let infoTr = createEl('tr', '', tbody, 'info');
        createEl('td', `${model}`, infoTr);
        createEl('td', `${Number(price).toFixed(2)}`, infoTr);
        let infoTd3 = createEl('td', '', infoTr);
        let moreBtn = createEl('button', 'More Info', infoTd3, 'moreBtn');
        let buyBtn = createEl('button', 'Buy it', infoTd3, 'buyBtn');
        let hideTr = createEl('tr', '', tbody, 'hide');
        createEl('td', `Year: ${Number(year)}`, hideTr);
        let hideTd2 = createEl('td', `Description: ${description}`, hideTr);
        hideTd2.colSpan = '3';

        clearInput();

        //more btn
        moreBtn.addEventListener('click', onMore);
        function onMore() {
            if (moreBtn.textContent == 'More Info') {
                moreBtn.textContent = 'Less Info';
                Array.from(document.querySelectorAll('.hide')).forEach(el => el.style.display = 'contents');
            } else {
                moreBtn.textContent = 'More Info';
                Array.from(document.querySelectorAll('.hide')).forEach(el => el.style.display = 'none');
            }
        }

        //buy btn
        buyBtn.addEventListener('click', onBuy);
        function onBuy() {
            total += Number(price);
            totalPrice.textContent = total.toFixed(2);
            infoTr.remove();
            hideTr.remove();
        }

        function clearInput() {
            inputs.model.value = '';
            inputs.year.value = '';
            inputs.description.value = '';
            inputs.price.value = '';
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

}
