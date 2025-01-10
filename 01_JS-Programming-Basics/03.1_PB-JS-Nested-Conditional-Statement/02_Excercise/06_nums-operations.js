function operations(num1, num2, operator) {
    let result = 0;

    // calculate
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
    }

    // print
    switch (operator) {
        case '+':
        case '-':
        case '*': {
            let evenOdd = '';
            result % 2 === 0 ? evenOdd = 'even' : evenOdd = 'odd';
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
        };
            break;
        case '/': {
            if (num2 != 0) {
                console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
        };
            break;
        case '%': {
            if (num2 != 0) {
                console.log(`${num1} ${operator} ${num2} = ${result}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
        };
            break;
    }
}

operations(10, 12, "+");
operations(10, 1, "-");
operations(7, 3, "*");
operations(123, 12, "/");
operations(10, 3, "%");
operations(112, 0, "/");
operations(10, 0, "%");