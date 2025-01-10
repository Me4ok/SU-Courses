function equalSum(arr) {
    let elementIndex = null;


    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let x = 0; x < i; x++) {
            sumLeft += arr[x];
        }
        for (let y = i + 1; y < arr.length; y++) {
            sumRight += arr[y];
        }

        sumLeft == sumRight ? elementIndex = i : elementIndex;
    }
    console.log(elementIndex != null ? elementIndex : 'no');
}

equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);