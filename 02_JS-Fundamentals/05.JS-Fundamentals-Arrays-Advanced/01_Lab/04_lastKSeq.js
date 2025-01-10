function lastKSeq(n, k) {
    let resultArr = [1];

    for (let i = 0; i < n - 1; i++) {
        let tempValue = 0;
        let tempArr = resultArr.slice(-k);
        
        tempArr.forEach(number => {
            tempValue += number;
        });

        resultArr.push(tempValue);
    }

    /*
    for (let i = 0; i < n - 1; i++) {
        resultArr
            .push(resultArr
                .slice(-k)
                .reduce((a, b) => a + b)
            );
    }
    */

    console.log(resultArr.join(' '));
}

lastKSeq(6, 3);
lastKSeq(8, 2);