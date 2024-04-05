class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        //if peak is already in goals obj - return
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        //else add the goal and return
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    };

    hike(peak, time, difficultyLevel) {
        //if peak not found in this.goals, throw error
        if (!this.goals.hasOwnProperty(peak)) {
            throw Error(`${peak} is not in your current goals`);
        };
        //if peak exists but resources = 0, throw error
        if (this.resources == 0) {
            throw Error("You don't have enough resources to start the hike");
        }


        if (this.resources - (time * 10) < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            //extract used resources from all and add hike to listOfHikes
            this.resources -= time * 10;
            this.listOfHikes.push({
                peak,
                time,
                difficultyLevel
            });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    };

    rest(time) {
        //add time for rest to resources
        this.resources += time * 10;
        //if resources >= 100, set them to 100 and return
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        };
    };

    showRecord(criteria) {
        //if no hikes yet - return
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        };

        if(criteria == 'all'){
            let result = [`All hiking records:`];
            for (const hike of this.listOfHikes) {
                result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            };
            return result.join('\n');
        }

        let foundHikes = this.listOfHikes.filter(h => h.difficultyLevel == `${criteria}`);
        foundHikes.sort((a, b) => a.time - b.time);
        //if no result - return
        if (foundHikes.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        //let bestHike = foundHikes[0];
        return `${this.username}'s best ${criteria} hike is ${foundHikes[0].peak} peak, for ${foundHikes[0].time} hours`;
    };
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));




