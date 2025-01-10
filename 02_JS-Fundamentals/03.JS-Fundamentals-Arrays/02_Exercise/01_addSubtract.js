function addSubtract(array) {
    let initialArrSum = 0;
    let modifiedArrSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let modifiedNum = 0;
        initialArrSum += currentNum;

        if (currentNum % 2 == 0) {
            modifiedNum = currentNum + i;
        } else {
            modifiedNum = currentNum - i;
        }

        array[i] = modifiedNum;
        modifiedArrSum += modifiedNum;
    }

    console.log(array);
    console.log(initialArrSum);
    console.log(modifiedArrSum);
}

addSubtract([5, 15, 23, 56, 35]);
addSubtract([-5, 11, 3, 0, 2]);