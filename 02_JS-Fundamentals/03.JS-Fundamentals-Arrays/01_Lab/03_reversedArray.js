function reversedArray(number, array) {
    let reversedArray = [];

    for (let i = number - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    console.log(reversedArray.join(' '));
}

reversedArray(3, [10, 20, 30, 40, 50]);
reversedArray(4, [-1, 20, 99, 5]);
reversedArray(2, [66, 43, 75, 89, 47]);