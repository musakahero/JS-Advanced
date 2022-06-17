class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this.regex = regex; //pattern
        this.elements = document.querySelectorAll(selector);
        this._invalidSymbols = new RegExp(this.regex);

    }
    get elements() {
        return this._elements;
    }
    set elements(val) {
        this._elements = val;
        Array.from(this._elements).forEach(e => e.addEventListener('input', (ev)=> {
            Array.from(this.elements).forEach(e => e.value = ev.target.value);
            this.value = ev.target.value;
        }));
    }
    
    get value() {
        return this._value;
    }
    set value(val) {
        Array.from(this._elements).forEach(e => e.value = val);
        this._value = val;

    }
    isValid() {
        for (const item of this._elements) {
            if (this._invalidSymbols.test(item.value)) {
                return false;
            }
        }
        return true;
    }

}


let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

// inputs.addEventListener('click', function () { console.log(textbox.value); });
