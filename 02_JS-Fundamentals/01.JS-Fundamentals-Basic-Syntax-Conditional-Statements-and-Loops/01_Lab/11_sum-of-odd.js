function solve(num) {
    let current = 1;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        console.log(current);
        sum += current;
        current += 2;
    }

    console.log('Sum: ' + sum);
}

solve(5);
solve(3);