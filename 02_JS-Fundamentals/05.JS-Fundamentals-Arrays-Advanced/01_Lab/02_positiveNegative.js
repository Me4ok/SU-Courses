function positiveNegative(input) {
    let resultArray = [];

    input
        .map(Number)
        .forEach(el => {
            if (el < 0) {
                resultArray.unshift(el);
            } else {
                resultArray.push(el);
            }
        });

    /**
    for (let element of input) {
        let number = Number(element);

        if (number < 0) {
            resultArray.unshift(number);
        } else {
            resultArray.push(number);
        }
    }
     */
    

    console.log(resultArray);
}

positiveNegative(['7', '-2', '8', '9']);
positiveNegative(['3', '-2', '0', '-1']);