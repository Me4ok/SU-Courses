function mergeArrays(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let tempValue = '';
        i % 2 == 0 ? tempValue = Number(arr1[i]) + Number(arr2[i]) : tempValue = arr1[i] + arr2[i];
        newArr.push(tempValue);
    }

    console.log(newArr.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);