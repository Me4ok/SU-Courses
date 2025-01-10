function findSmallestNum(input) {
    let i = 0;
    let currValue = input[i];
    let largestN = Number.MIN_SAFE_INTEGER;

    while (currValue != 'Stop') {
        if (Number(currValue) > largestN) {
            largestN = Number(currValue);
        }

        i++;
        currValue = input[i];
    }

    console.log(largestN);
}

// findLargestNum(["100", "99", "80", "70", "Stop"]);
findSmallestNum(["-10", "20", "-30", "Stop"]);
findSmallestNum(["45", "-20", "7", "99", "Stop"]);
findSmallestNum(["999", "Stop"]);
findSmallestNum(["-1", "-2", "Stop"]);