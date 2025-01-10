function equalArrCheck(arr1, arr2) {
    // itterate both arrays elements
    // - compare elements on the same index
    // - if found different elements, print index and end
    // - if identical, print sum of elements of the first arr

    let sum = 0;
    let areEqual = true;
    let exitIndex = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += Number(arr1[i]);

        if (arr1[i] != [arr2[i]]) {
            areEqual = false;
            exitIndex = i;
            break;
        }
    }

    areEqual ? console.log(`Arrays are identical. Sum: ${sum}`) : console.log(`Arrays are not identical. Found difference at ${exitIndex} index`);
}

equalArrCheck(['10','20','30'], ['10','20','30']);
equalArrCheck(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrCheck(['1'], ['10']);