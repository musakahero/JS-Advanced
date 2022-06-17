class Modal {
    constructor(message) {
        this.message = message;
        this.element = this._init();
        this.render();
    }

    _init() {
        //const message = 'This is a message';
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<div class="modal">
    <p>${this.message}</p>
    <button>OK</button>
</div>`;

        overlay.querySelector('button').addEventListener('click', this.close.bind(this));

        return overlay;
    }

    render() {
        document.body.appendChild(this.element);
    }

    close() {
        this.element.remove();
    }
}

function create() {
    const modal = new Modal('This is a message');

    setTimeout(() => modal.close(), 2000);
}



document.querySelector('button').addEventListener('click', create);