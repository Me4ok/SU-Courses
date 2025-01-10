function parkingLot(input) {
    // let parkedCarsList = new Map();
    let parkedCarsList = {};

    for (let line of input) {
        const [command, licensePlate] = line.split(', ');

        switch (command) {
            case 'IN': {
                // parkedCarsList.set(licensePlate, null);
                parkedCarsList[licensePlate] = null;
            };
                break;
            case 'OUT': {
                // parkedCarsList.delete(licensePlate);
                delete parkedCarsList[licensePlate];
            };
                break;
        }
    }

    // if (parkedCarsList.size > 0) {
    //     Array.from(parkedCarsList)
    //         .sort((a, b) => a[0].localeCompare(b[0]))
    //         .forEach(([licensePlate, string]) => console.log(licensePlate));
    // } else {
    //     console.log('Parking Lot is Empty');
    // }
    let result = Object.keys(parkedCarsList);

    if (result.length > 0) {
        result
            .sort((a, b) => a.localeCompare(b))
            .forEach(key => console.log(key));
    } else {
        console.log('Parking Lot is Empty');
    }
}

parkingLot([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
parkingLot([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);