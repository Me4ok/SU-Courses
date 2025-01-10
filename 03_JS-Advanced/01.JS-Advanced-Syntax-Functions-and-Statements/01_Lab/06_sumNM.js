function sum(p1, p2) {
    const num1 = Number(p1);
    const num2 = Number(p2);
    // let start;
    // let end;
    let sum = 0;

    // if (num1 > num2) {
    //     start = num2;
    //     end = num1;
    // } else {
    //     start = num1;
    //     end = num2;
    // }

    // for (let i = start; i <= end; i++) {
    //     sum += i;
    // }

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
}

console.log(sum('0', '0'));
console.log(sum('1', '5'));
console.log(sum('-8', '20'));