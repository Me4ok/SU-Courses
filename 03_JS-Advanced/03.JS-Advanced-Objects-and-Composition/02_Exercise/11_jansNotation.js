function jansNotation(input) {
    let result = [];
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };
    let numbersDepleted = false;

    // Push numbers into the result array
    for (let operand of input) {
        if (!isNaN(operand)) {
            result.push(Number(operand));
            continue;
        }

        // Adding numbers has finished
        // - Calculate last 2 number array elements
        // -- Check if array has enough numbers
        if (result.length < 2) {
            numbersDepleted = true;
            break;
        }

        let [numA, numB] = result.splice(result.length - 2, 2); // always returns 2 element
        const numToAdd = operations[operand](numA, numB);
        /* // Using switch-case
        let numToAdd = 0;
        switch (operand) {
            case '+': {
                numToAdd = numA + numB;
            };
                break;
            case '-': {
                numToAdd = numA - numB;
            };
                break;
            case '*': {
                numToAdd = numA * numB;
            };
                break;
            case '/': {
                numToAdd = numA / numB;
            };
                break;
        }        
        */
        result.push(numToAdd);
    }

    if (numbersDepleted) {
        console.log('Error: not enough operands!');
    } else {
        if (result.length > 1) {
            console.log('Error: too many operands!');
        } else {
            console.log(result[0]);
        }
    }
}

jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);