function race(input) {
    /* // Mine solution
    const participants = input.shift();
    let finalists = {};
    
    let pattern = /\w+/g;

    for (let row of input) {
        if (row == 'end of race') {
            break;
        }

        let result = row.match(pattern);
        let name = '';
        let score = 0;
        let concatSymbols = result.join('');

        for (let symbol of concatSymbols.split('')) {
            if (isNaN(symbol)) {
                name += symbol;
            } else {
                score += Number(symbol);
            }
        }

        if (participants.includes(name)) {
            if (finalists.hasOwnProperty(name) == false) {
                finalists[name] = 0;
            }            
            
            finalists[name] += score;
        }

    }

    console.log(finalists);
    let finalistsEntries = Object.entries(finalists);
    let rankingList = finalistsEntries.sort((a, b) => b[1] - a[1]);
    let classifiers = {
        1: 'st',
        2: 'nd',
        3: 'rd'
    }
    console.log(finalistsEntries);

    for (let i = 1; i <= 3; i++) {
        const participantName = rankingList[i - 1][0];
        console.log(`${i}${classifiers[i]}: ${participantName}`);
    }
    */
    
    // Viktor Kostadinov solution
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;

    let racerNames = input.shift().split(', ');
    let racers = {};
    for (let name of racerNames) {
        racers[name] = 0;
    }

    while (input[0] != 'end of race') {
        let line = input.shift();

        let letters = line.match(namePattern);
        let numbers = line.match(distancePattern);

        let name = letters.join('');
        let distances = numbers.map(Number);

        let totalDistance = 0;
        for (let x of distances) {
            totalDistance += x;
        }

        if (racers[name] != undefined) {
            racers[name] += totalDistance;
        }
    }
    
    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]); // slice(0, 3) - take first 3 participants. If participanta < 3, it will take all
    if (result[0]) {
        console.log('1st place: ' + result[0][0]);
    }
    if (result[1]) {
        console.log('2nd place: ' + result[1][0]);
    }
    if (result[2]) {
        console.log('3rd place: ' + result[2][0]);
    }
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
// race([
//     'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
//     'Mi*&^%$ch123o!#$%#nne787) ',
//     '%$$B(*&&)i89ll)*&) ',
//     'R**(on%^&ald992) ',
//     'T(*^^%immy77) ',
//     'Ma10**$#g0g0g0i0e',
//     'end of race'
// ]);