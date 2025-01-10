function power(number, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result *= number;
    }

    console.log(result);
}

power(2, 8);
power(3, 4);