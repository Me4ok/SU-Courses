function increasing(input) {
    let result = [];

    for (let number of input) {
        // first itteration, add input number to the empty result array
        if (result.length == 0) {
            result.push(number);
        } else {
            // compare if current number is greater than last element of the array
            if (number >= result[result.length - 1]) {
                result.push(number);
            }
        }
    }

    return result;
}

increasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
increasing([1, 2, 3, 4]);
increasing([20, 3, 2, 15, 6, 1]);