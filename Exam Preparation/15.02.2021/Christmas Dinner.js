class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget() {
        return this._budget;
    };
    set budget(val) {
        if (val < 0) {
            throw Error("The budget cannot be a negative number");
        };
        this._budget = val;
    };

    shopping(product) {
        let [prodType, price] = [...product];
        if (price > this._budget) {
            throw Error("Not enough money to buy this product");
        }
        this.products.push(prodType);
        this._budget -= price;
        return `You have successfully bought ${prodType}!`;
    };

    recipes(recipe) {
        let { recipeName, productsList } = { ...recipe };
        for (const prod of productsList) {
            if (!this.products.includes(prod)) {
                throw Error("We do not have this product");
            };
        }

        this.dishes.push({
            recipeName,
            productsList
        });
        return `${recipeName} has been successfully cooked!`;
    };

    inviteGuests(name, dish) {
        if (this.dishes.find(d => d.recipeName == dish) == undefined) {
            throw Error("We do not have this dish");
        };

        if (this.guests.hasOwnProperty(name)) {
            throw Error("This guest has already been invited");
        };

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    };

    showAttendance() {
        let result = [];

        for (const guest in this.guests) {
            let guestDish = this.guests[guest];
            let foundRecipe = this.dishes.find(d => d.recipeName == guestDish);
            result.push(`${guest} will eat ${guestDish}, which consists of ${foundRecipe.productsList.join(', ')}`);
        }

        return result.join('\n');
    }
};

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
