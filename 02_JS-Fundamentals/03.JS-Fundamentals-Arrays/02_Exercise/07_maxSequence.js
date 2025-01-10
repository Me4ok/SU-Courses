function sequence(arr) {
    let maxSeq = [];

    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        tempArr.push(arr[i]);

        for (let z = i + 1; z < arr.length; z++) {
            if (arr[i] == arr[z]) {
                tempArr.push(arr[z]);
            } else {
                break;
            }
        }

        if (tempArr.length > maxSeq.length) {
            maxSeq = tempArr;
        }
    }

    console.log(maxSeq.join(' '));
}

sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// sequence([1, 1, 1, 2, 3, 1, 3, 3]);
// sequence([4, 4, 4, 4]);
// sequence([0, 1, 1, 5, 2, 2, 2, 6, 3, 3, 3]);