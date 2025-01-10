function solve(input) {
    let num = Number(input);

    if (num % 10 === 0) {
        console.log('The number is divisible by 10');
    } else if (num % 6 === 0) {
        console.log('The number is divisible by 6');
    } else if (num % 3 === 0) {
        console.log('The number is divisible by 3');
    } else if (num % 2 === 0) {
        console.log('The number is divisible by 2');
    } else {
        console.log('Not divisible');
    }
}

solve(30);
solve(15);
solve(12);
solve(1643);