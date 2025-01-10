function distinct(input) {
    let resultArr = [];
    
    for (let element of input) {
        if (!resultArr.includes(element)) {
            resultArr.push(element);
        }
    }

    console.log(resultArr.join(' '));
}

distinct([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct([20, 8, 12, 13, 4, 4, 8, 5]);