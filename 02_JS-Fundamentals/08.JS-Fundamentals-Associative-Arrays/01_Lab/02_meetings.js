function meetings(input) {
    /*
    // Object way
    let meetingsList = {};

    for (const line of input) {
        const [day, name] = line.split(' ');
        
        if (!meetingsList.hasOwnProperty(day)) {
            meetingsList[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let day in meetingsList) {
        console.log(day, '->', meetingsList[day]);
    }
    */

    // Map way
    let meetingsList = new Map();

    for (const line of input) {
        const [day, name] = line.split(' ');

        if (!meetingsList.has(day)) {
            meetingsList.set(day, name);
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [day, name] of meetingsList) {
        console.log(day, '->', name);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
console.log('---');
meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);