function trainPassengers(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxPassengers = Number(input.shift());

    for (let combo of input) {
        const [command, param] = combo.split(' ');

        if (command == 'Add') {
            wagons.push(Number(param));
        }

        if (!isNaN(Number(command))) {
            let passengersToAdd = Number(command);
            
            for (let i = 0; i < wagons.length; i++) {
                const passengersCount = wagons[i];
                if ((passengersCount + passengersToAdd) <= maxPassengers) {
                    wagons[i] = passengersCount + passengersToAdd;
                    break;
                }
            }
        }
    }
    
    console.log(wagons.join(' '));
}

trainPassengers([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
trainPassengers([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]);