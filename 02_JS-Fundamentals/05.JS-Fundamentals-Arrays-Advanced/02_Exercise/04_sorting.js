function sortingArray(input) {
    let initialArray = input.slice().sort((a, b) => b - a);
    let sortedArray = [];
    
    while (initialArray.length > 0) {
        sortedArray.push(initialArray.shift(), initialArray.pop());
    }

    console.log(sortedArray.join(' '));
}

sortingArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortingArray([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);