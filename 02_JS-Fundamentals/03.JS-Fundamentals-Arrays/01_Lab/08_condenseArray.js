function condense(array) {
    while (array.length > 1) {
        let tempArr = [];
        for (let i = 0; i < array.length - 1; i++) {
            let sum = array[i] + array[i + 1];
            tempArr.push(sum);
        }
        array = tempArr;
    }

    console.log(array[0]);
}

condense([2, 10, 3]); // 12, 13
condense([5, 0, 4, 1, 2]);
condense([3]);