function magic(input) {
    let isMagic = true;
    let mainSum = input[0].reduce((a, b) => a + b);

    // check rows sums
    for (let row of input) {
        let currentSum = row.reduce((a, b) => a + b);
        if (currentSum != mainSum) {
            isMagic = false;
            break;
        }
    }

    // check columns sums
    for (let i = 0; i < input.length; i++) {
        let colSum = 0;

        // take i element of each row, forming a sum for i column
        for (let row of input) {
            let currentEl = row[i];
            colSum += currentEl;
        }
        
        // check if sum matches magic
        if (colSum != mainSum) {
            // if no, change flag status and exit the loop
            isMagic = false;
            break;
        }
    }

    isMagic ? console.log('true') : console.log('false');
}

magic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magic([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magic([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);