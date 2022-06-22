window.addEventListener('load', solve);

function solve() {
    let input = {
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone'),
        productType: document.getElementById('type-product')
    };

    let sections = {
        receivedOrders: document.getElementById('received-orders'),
        completedOrders: document.getElementById('completed-orders')
    }
    
    let sendBtn = document.querySelector('#right button');
    sendBtn.addEventListener('click', onSend);
    let clearBtn = document.querySelector('.clear-btn');

    function onSend(ev){
        ev.preventDefault();
        //store values
        let description = input.description.value;
        let clientName = input.clientName.value;
        let clientPhone = input.clientPhone.value;
        let productType = input.productType.value;

        //validate input
        if(description == '' || clientName == '' || clientPhone == ''){
            return;
        }

        //create element
        let div = createEl('div','',sections.receivedOrders, 'container');
        createEl('h2', `Product type for repair: ${productType}`, div);
        createEl('h3', `Client information: ${clientName}, ${clientPhone}`, div);
        createEl('h4', `Description of the problem: ${description}`, div);

        
        let startBtn = createEl('button', 'Start repair', div, 'start-btn');
        let finishBtn = createEl('button', 'Finish repair', div, 'finish-btn');
        finishBtn.disabled = true;

        //clear input fields
        input.description.value = '';
        input.clientName.value = '';
        input.clientPhone.value = '';

        startBtn.addEventListener('click', onStart);
        function onStart(){
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        finishBtn.addEventListener('click', onFinish);
        function onFinish(){
            sections.completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        }

        clearBtn.addEventListener('click', onClear);
        function onClear(){
            let allContainers = Array.from(sections.completedOrders.querySelectorAll('.container'));
            allContainers.forEach(c => c.remove());
        }
        
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