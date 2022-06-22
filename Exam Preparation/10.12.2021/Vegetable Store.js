class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        for (const veg of vegetables) {
            let [type, quantity, price] = veg.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            //check if obj with this type is included

            let foundIndex = this.availableProducts.findIndex(e => e.type == type);
            if (foundIndex != -1) {
                this.availableProducts[foundIndex].quantity += quantity;
                if (this.availableProducts[foundIndex].price < price) {
                    this.availableProducts[foundIndex].price = price;
                }
            } else {
                this.availableProducts.push({
                    type: type,
                    quantity: quantity,
                    price: price
                })
            }
        }


        let allProductsTypes = [];
        this.availableProducts.forEach(p => allProductsTypes.push(p.type));

        return `Successfully added ${allProductsTypes.join(', ')}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0.00;
        for (const prod of selectedProducts) {
            let [type, quantity] = prod.split(' ');
            quantity = Number(quantity);

            let findProdIndex = this.availableProducts.findIndex(p => p.type == type);
            if (findProdIndex == -1) {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                //check quantity
                if (this.availableProducts[findProdIndex].quantity < quantity) {
                    throw Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }
            }
            let currPrice = quantity * this.availableProducts[findProdIndex].price;
            totalPrice += currPrice;
            this.availableProducts[findProdIndex].quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
    rottingVegetable(type, quantity) {
        let findProdIndex = this.availableProducts.findIndex(p => p.type == type);
        //prod not found
        if (findProdIndex == -1) {
            throw Error(`${type} is not available in the store.`);
        }
        if (quantity > this.availableProducts[findProdIndex].quantity) {
            this.availableProducts[findProdIndex].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            this.availableProducts[findProdIndex].quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }
    revision(){
        let result = [];
        result.push('Available vegetables:');
        let sortedArr = this.availableProducts.sort((a,b)=> a.price - b.price);
        for (const prod of sortedArr) {
            result.push(`${prod.type}-${prod.quantity}-$${prod.price}`);
        }
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
