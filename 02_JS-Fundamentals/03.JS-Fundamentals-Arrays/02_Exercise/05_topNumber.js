function topNumber(arr) {
    let topNumsArr = [];

    for (let i = 0; i < arr.length; i++) {
        let topNum = arr[i];

        for (let z = i + 1; z < arr.length; z++) {
            if (arr[z] > topNum) {
                topNum = arr[z];
            }
        }

        if (!topNumsArr.includes(topNum)) {
            topNumsArr.push(topNum);
        }
    }

    console.log(topNumsArr);
}

topNumber([1, 4, 3, 2]);
topNumber([14, 24, 3, 19, 15, 17]);
topNumber([41, 41, 34, 20]);
topNumber([27, 19, 42, 2, 13, 45, 48]);