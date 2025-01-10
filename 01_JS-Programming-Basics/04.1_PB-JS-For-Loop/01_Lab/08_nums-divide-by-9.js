function divideBy9(num1, num2) {
    let nums = '';
    let sum = 0;

    for (let i = Number(num1); i <= Number(num2); i++) {
        if (i % 9 == 0) {
            sum += i;
            nums += i + '\n';
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(nums);
}

divideBy9(100, 200);