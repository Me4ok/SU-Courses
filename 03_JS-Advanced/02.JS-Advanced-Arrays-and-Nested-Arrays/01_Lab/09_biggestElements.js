function biggest(input) {
    let result = [];

    for (let array of input) {
        for (let num of array) {
            result.push(num);
        }
    }

    const biggestNumber = result.sort((a, b) => b - a).slice(0, 1);
    
    return biggestNumber[0];
}

biggest([
    [20, 50, 10],
    [8, 33, 145]
]);
biggest([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);