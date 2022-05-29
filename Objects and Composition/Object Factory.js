function factory(funcLibrary, orders) {
    let result = [];

    for (const order of orders) {
        let newObj = {};

        for (const prop in order.template) {
            newObj[prop] = order.template[prop];
        }
        
        for (const functionality of order.parts) {
            newObj[functionality] = funcLibrary[functionality];
        }
        
        console.log(`newObj:\n${newObj}`);
        result.push(newObj);
    }
   
    return result;
}

//////////////////////////////////////////////

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);