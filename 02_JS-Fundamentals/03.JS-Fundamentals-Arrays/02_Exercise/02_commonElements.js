function compareArrays(arr1, arr2) {
    let newArr = [];

    for (let elArr1 of arr1) {
        for (let elArr2 of arr2) {
            if (elArr1 == elArr2) {
                if (newArr.length == 0) {
                    newArr.push(elArr1);
                } else {
                    newArr[1] = elArr1;
                }
            }
        }
    }

    /*
    // If more than 2 matches, condition for two string arrays would not be met
        for (let el of arr1) {
            if (arr2.includes(el)) {
                console.log(el);
        }
    }
    */

    console.log(newArr.join('\n'));
}

compareArrays(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
console.log('= = =');
compareArrays(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);