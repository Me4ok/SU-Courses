function process(numbers) {
    let result = numbers
        .filter((a, index) => index % 2 == 1)
        .map(a => a * 2)
        .reverse();
    
    return result;
}

console.log(process([10, 15, 20, 25]));
console.log('- - -');
console.log(process([3, 0, 10, 4, 7, 3]));