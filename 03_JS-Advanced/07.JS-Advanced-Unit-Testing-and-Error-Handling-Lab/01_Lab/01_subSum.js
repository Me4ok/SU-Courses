function sum(arr, startIndex, endIndex) {
    let result = 0;

    // Check in first element is an array
    if (Array.isArray(arr) == false) {
        return NaN;
    }

    // Fix indices values if outside input array bounds
    startIndex = Math.max(startIndex, 0);

    if (endIndex < 0 || endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    
    for (let i = startIndex; i <= endIndex; i++) {
        // Check if any arr element is not a number -> return NaN if yes
        const value = Number(arr[i]);
        
        if (typeof value != 'number') {
            return NaN;
        }

        result += value;
    }
    
    return result;
}

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sum([10, 'twenty', 30, 40], 0, 2));
console.log(sum([], 1, 2));
console.log(sum('text', 0, 2));