class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (condition != 'child' && condition != 'student' && condition != 'collegian') {
            throw Error("Unsuccessful registration at the camp.");
        };

        if (this.listOfParticipants.find(p => p.name == name) != undefined) {
            return `The ${name} is already registered at the camp.`;
        };
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`;
    };

    unregisterParticipant(name) {
        let foundParticipantIndex = this.listOfParticipants.findIndex(p => p.name == name);
        if (foundParticipantIndex == -1) {
            throw Error(`The ${name} is not registered in the camp.`);
        };

        this.listOfParticipants.splice(foundParticipantIndex, 1);
        return `The ${name} removed successfully.`;
    };

    timeToPlay(typeOfGame, participant1, participant2) {
        let findPart1 = this.listOfParticipants.find(p => p.name == participant1);
        let findPart2 = this.listOfParticipants.find(p => p.name == participant2);

        //check condition for 2-player game
        if (typeOfGame == 'WaterBalloonFights') {
            //check if names are valid
            if (findPart1 == undefined || findPart2 == undefined) {
                throw Error(`Invalid entered name/s.`);
            };
            if (findPart1.condition != findPart2.condition) {
                throw Error(`Choose players with equal condition.`);
            };
            if (findPart1.power > findPart2.power) {
                findPart1.wins++;
                return `The ${findPart1.name} is winner in the game ${typeOfGame}.`
            } else if (findPart1.power < findPart2.power) {
                findPart2.wins++;
                return `The ${findPart2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            };

        } else if (typeOfGame == 'Battleship') {
            //check if name is valid
            if (findPart1 == undefined) {
                throw Error(`Invalid entered name/s.`);
            };
            findPart1.power += 20;
            return `The ${findPart1.name} successfully completed the game ${typeOfGame}.`;
        };
    };

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for (const part of sorted) {
            result.push(`${part.name} - ${part.condition} - ${part.power} - ${part.wins}`);
        }
        return result.join('\n');
    }
};

const camp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(camp.registerParticipant('Petar Petarson', 'student', 300));
console.log(camp.registerParticipant('Sara Dickinson', 'child', 200));
console.log(camp.unregisterParticipant('Sara Dickinson'));
console.log(camp.unregisterParticipant('John Petarson'));