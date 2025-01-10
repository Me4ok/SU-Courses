function firstLast(input) {
    let k = input.shift();
    let firstKElements = input.slice(0, k);
    let lastKElements = input.slice(-k);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

firstLast([2, 7, 8, 9]);
firstLast([3, 6, 7, 8, 9]);
firstLast([5, 3]);