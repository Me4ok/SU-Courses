function evenPosition(input) {
    let resultElements = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            resultElements.push(input[i]);
        }
    }

    console.log(resultElements.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);