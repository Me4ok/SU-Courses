function mathOps(num1, num2, op) {
    let result = 0;

    switch (op) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
        case '%': result = num1 % num2;
            break;
        case '**': result = num1 ** num2;
            break;
    }

    console.log(result);
}

mathOps(5, 6, '+');
mathOps(3, 5.5, '*');