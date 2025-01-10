function magicalSum(arr, magicalNum) {
    for (let i = 0; i < arr.length; i++) {
        for (let z = i + 1; z < arr.length; z++) {
            let tempSum = arr[i] + arr[z];
            
            if (tempSum == magicalNum) {
                console.log(arr[i] + ' ' + arr[z]);
            }
        }        
    }
}

magicalSum([1, 7, 6, 2, 19, 23], 8);
magicalSum([14, 20, 60, 13, 7, 19, 8], 27);
magicalSum([1, 2, 3, 4, 5, 6], 6);