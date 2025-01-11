function lastK(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = result.length - k;        
        startIndex <= 0 ? startIndex = 0 : startIndex;
        
        let tempArray = result.slice(startIndex).reduce((a, b) => a + b);        
        result.push(tempArray);
    }

    return result;
}

lastK(6, 3);
lastK(8, 2);