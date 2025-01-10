function sumEvenNums(array) {
    let sumOfEven = 0;
    for (let element of array) {
        if (+element % 2 == 0) {
            sumOfEven += +element;
        }
    }

    console.log(sumOfEven);
}

sumEvenNums(['1','2','3','4','5','6']); // 12
sumEvenNums(['3','5','7','9']); // 0
sumEvenNums(['2','4','6','8','10']); // 30