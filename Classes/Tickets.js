function solve(ticketDescrArr, sortBy) {
    //class Ticket
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    //create the classes and store in array
    let result = [];

    for (const ticket of ticketDescrArr) {
        let [destination, price, status] = ticket.split('|');
        result.push(new Ticket(destination, Number(price), status));
    }

    //sorting functions
    let sortOptions = {
        destination: () => result.sort((a, b) => (a.destination).localeCompare(b.destination)),
        price: () => result.sort((a, b) => a.price - b.price),
        status: () => result.sort((a, b) => (a.status).localeCompare(b.status))
    };

    sortOptions[sortBy]();
    //console.log(result);
    return result;
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
);