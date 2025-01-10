function blow(sequence, commands) {
    const [specialNum, power] = commands;

    while (sequence.includes(specialNum)) {
        let indexOfSpecial = sequence.indexOf(specialNum);
        const startIndex = indexOfSpecial - power;
        sequence.splice(indexOfSpecial, power + 1 );
        sequence.splice(startIndex, power);
    }

    let sumOfArrElements = sequence.reduce((a, b) => a + b);
    console.log(sumOfArrElements);
}

blow(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
blow(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);
blow(
    [1, 7, 7, 1, 2, 3],
    [7, 1]
);
blow(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);