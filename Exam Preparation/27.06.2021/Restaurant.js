class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };

    loadProducts(products) {

        for (const prod of products) {
            let [productName, productQuantity, productTotalPrice] = prod.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            };
        }

        return this.history.join('\n');
    }
    addToMenu(meal, neededProducts, price) {
        //check if product exists
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal]['products'] = {};
            this.menu[meal]['price'] = price;

            for (const item of neededProducts) {
                let [prodName, prodQtity] = item.split(' ');
                prodQtity = Number(prodQtity);
                this.menu[meal]['products'][prodName] = prodQtity;
            }

            //how many meals in menu
            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else if (Object.keys(this.menu).length == 0
                || Object.keys(this.menu).length > 1) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

    };
    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let result = [];
            for (const meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }
            return result.join('\n');
        }
    };
    makeTheOrder(meal){
        let foundMeal = Object.keys(this.menu).find(m => m == meal);
        if(foundMeal == undefined){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        for (const prod in this.menu[meal]['products']) {
            if(Object.keys(this.stockProducts).includes(prod) 
            && this.stockProducts[prod] >= this.menu[meal]['products'][prod]){
                //reduce quantity of stock prods & add price of meal to budget
                this.stockProducts[prod] -= this.menu[meal]['products'][prod];
                this.budgetMoney += this.menu[meal]['price'];
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.budgetMoney);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
console.log(kitchen.budgetMoney);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.budgetMoney);


