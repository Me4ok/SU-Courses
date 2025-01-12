function sorting(input) {
    let result = [];
    let sortedArray = input.sort((a, b) => a - b);
    
    while (sortedArray.length > 0) {
        let smallElement = sortedArray.shift();
        if (sortedArray.length == 0) {
            // in case of an array with odd # elements, when 1 element has left, add it to the result and break
            result.push(smallElement);
            break;
        }
        let largerstElement = sortedArray.pop();

        result.push(smallElement, largerstElement);
    }

    return result;
}

console.log(sorting([1, 65, 5, 3, 52])); // [1, 65, 3, 52]
// sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// sorting([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);