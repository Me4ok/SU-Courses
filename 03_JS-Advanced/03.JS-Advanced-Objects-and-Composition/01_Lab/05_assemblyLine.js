function createAssemblyLine() {
    let extras = {
        hasClima(carObj) {
            carObj.temp = 21;
            carObj.tempSettings = 21;
            carObj.adjustTemp = function () {
                if (this.carObjtemp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
        },
        hasAudio(carObj) {
            carObj.currentTrack = null,
                carObj.nowPlaying = function () {
                    if (this.currentTrack != null) {
                        console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                    }
                }
        },
        hasParktronic(carObj) {
            carObj.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    };

    return extras;
}

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
// Test of hasClima
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
// = = =
// Test of hasAudio
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
// = = =
// Test of hasParktronic
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
// = = =
console.log(myCar);