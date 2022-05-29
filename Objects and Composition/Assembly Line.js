function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => car.temp < car.tempSettings ? car.temp++
            : car.temp > car.tempSettings ? car.temp--
            : undefined 
        },

        hasAudio(car) {
            car.currentTrack = { 
                name:null,
                artist:null
            }
            car.nowPlaying = () => car.currentTrack == null ? undefined
            : console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
        },

        hasParktronic(car){
            car.checkDistance = (distance) => distance < 0.1 ? console.log('Beep! Beep! Beep!')
            : distance >= 0.1 && distance < 0.25 ? console.log('Beep! Beep!')
            : distance >= 0.25 && distance < 0.5 ? console.log('Beep!')
            : console.log('');
        }
    };

}

//setup
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


//input

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

console.log(myCar);


