function solution() {
    let giftInput = document.querySelector('input');
    

    let sections = {
        listOfGifts: document.querySelector('section:nth-of-type(2) ul'),
        sentGifts: document.querySelector('section:nth-of-type(3) ul'),
        discardedGifts: document.querySelector('section:nth-of-type(4) ul'),
    }
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', onAdd);

    function onAdd() {
        let giftName = giftInput.value;

        let li = createEl('li', `${giftName}`, sections.listOfGifts, 'gift');
        let sendBtn = createEl('button', 'Send', li);
        sendBtn.id = 'sendButton';
        let discardBtn = createEl('button', 'Discard', li);
        discardBtn.id = 'discardButton';
        //sort gifts in alphabetical
        let sortedGifts = Array.from(sections.listOfGifts.children).sort((a,b) => a.textContent.localeCompare(b.textContent));
        sections.listOfGifts.innerHTML = '';
        sortedGifts.forEach(e => sections.listOfGifts.appendChild(e));
        //clear input field
        giftInput.value = '';

        sendBtn.addEventListener('click', onSend);
        function onSend(){
            li.remove();
            createEl('li', `${giftName}`, sections.sentGifts, 'gift');
        }
        discardBtn.addEventListener('click', onDiscard);
        function onDiscard(){
            li.remove();
            createEl('li', `${giftName}`, sections.discardedGifts, 'gift');
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