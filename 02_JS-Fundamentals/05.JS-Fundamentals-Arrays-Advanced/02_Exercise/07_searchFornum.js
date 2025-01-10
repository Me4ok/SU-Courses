function numSearch(input1, input2) {
    let nums = input1.slice();
    const [numsToTake, numsToDelete, targetNum] = input2.slice();
    
    let resultedArr = nums.splice(0, numsToTake);
    resultedArr.splice(0, numsToDelete);

    let occurences = 0;
    resultedArr.forEach(num => {
        num == targetNum ? occurences++ : occurences;
    });

    console.log(`Number ${targetNum} occurs ${occurences} times.`)
}

numSearch(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);
numSearch(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);