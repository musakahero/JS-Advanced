class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (typeof (plantName) == 'string'
            && typeof (spaceRequired) == 'number') {
            if (spaceRequired <= this.spaceAvailable) {
                //reduce garden space
                this.spaceAvailable -= spaceRequired;
                //add plant
                this.plants.push({
                    plantName,
                    spaceRequired,
                    ripe: false,
                    quantity: 0
                });
                return `The ${plantName} has been successfully planted in the garden.`;
            } else {
                throw Error('Not enough space in the garden.');
            };
        };
    };

    ripenPlant(plantName, quantity) {
        if (typeof (quantity) == 'number') {
            for (const plant of this.plants) {
                if (plant.plantName == plantName) {
                    //if not ripe yet
                    if (plant.ripe == false) {
                        //if quantity > 0
                        if (quantity > 0) {
                            plant.ripe = true;
                            plant.quantity += quantity;
                            //if quantity == 1
                            if (quantity == 1) {
                                return `${quantity} ${plantName} has successfully ripened.`;
                            } else {
                                return `${quantity} ${plantName}s have successfully ripened.`;
                            }
                        } else {
                            throw Error("The quantity cannot be zero or negative.");
                        }
                    } else {
                        throw Error(`The ${plantName} is already ripe.`);
                    }
                }
            }
            throw Error(`There is no ${plantName} in the garden.`);
        }
    }

    harvestPlant(plantName){
        for (const plant of this.plants) {
            if(plant.plantName == plantName){

                if(plant.ripe){
                    //free up the space taken
                    this.spaceAvailable += plant.spaceRequired;
                    //remove the plant from this.plants
                    let plantIndex = this.plants.indexOf(plant);
                    let removedPlant = this.plants.splice(plantIndex, 1)[0];
                    //setup properties needed for storage
                    delete removedPlant.ripe;
                    delete removedPlant.spaceRequired;
                    //add the plant to this.storage
                    this.storage.push(removedPlant);
                    return `The ${plantName} has been successfully harvested.`
                } else {
                    throw Error(`The ${plantName} cannot be harvested before it is ripe.`);
                }
            }
        }
        
        throw Error(`There is no ${plantName} in the garden.`);
    };

    generateReport(){
        //full string
        let info = [];
        //first line
        info.push(`The garden has ${this.spaceAvailable} free space left.`);
        //second line
        let sortedPlants = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
        
        let line = [];
        for (const plant of sortedPlants) {
            line.push(plant.plantName);
        }
        line = 'Plants in the garden: ' + line.join(', ');
        info.push(line);
        
        //third line
        if(this.storage.length == 0){
            console.log("Plants in storage: The storage is empty.");
        } else {
            let line = []
            for (const plant of this.storage) {
                let duo = '';
                duo += plant.plantName + ' ' + `(${plant.quantity})`;
                line.push(duo);
            }
            line = 'Plants in storage: ' + line.join(', ');
            info.push(line);
        }
        return info.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

