function party(input) {
    let guestsList = [];

    for (let message of input) {
        const name = message.split(' ')[0];
        
        if (message.includes('not')) {
            if (guestsList.includes(name)) {
                // remove guest name from the list
                const indexOfGuestName = guestsList.indexOf(name);
                guestsList.splice(indexOfGuestName, 1);
            } else {
                // print guest is not in the list
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestsList.includes(name)) {
                // print guest is already in the list
                console.log(`${name} is already in the list!`);
            } else {
                // add guest to the list
                guestsList.push(name);
            }
        }
    }

    console.log(guestsList.join('\n'));
}

party([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
party([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);