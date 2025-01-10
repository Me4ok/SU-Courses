function party(input) {
    // Map way
    let fullList = input.slice();
    let guestsList = new Map();
    let currentLine = fullList.shift();

    while (currentLine != 'PARTY') {
        // retrieving guests list until "PARTY" is received
        let guestName = currentLine;
        // set guest status to approved
        guestsList.set(guestName, 'approvedGuest');

        currentLine = fullList.shift();
    }

    for (let line of fullList) {let guestName = line;
        if (guestsList.has(guestName)) {
            // change guest status to arrived
            guestsList.set(guestName, 'arrived');
        }
    }

    let notArrivedList = [];
    Array.from(guestsList.entries())
        .forEach(([guestName, status]) => { // insert each not arrived guest into a new list
            if (status == 'approvedGuest') {
                notArrivedList.push(guestName);
            }
        });

    for (let i = 0; i < notArrivedList.length; i++) {
        let currentGuestName = notArrivedList[i];
        let guestNameFirstSymbol = currentGuestName[0];

        if (!isNaN(guestNameFirstSymbol)) {
            let nameToMove = notArrivedList.splice(i, 1); // delete the guest name starting with a number - a.k.a. VIP guest
            notArrivedList.unshift(nameToMove[0]); // insert it in front of the list. nameToMove is an array with 1 name, theferore it comes nameToMove[0] to get the name
        }
    }

    console.log(notArrivedList.length);
    console.log(notArrivedList.join('\n'));
}

party([
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('---');
party([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);