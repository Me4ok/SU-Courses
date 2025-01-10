function calculator(numOne, num2, command) {
    function multiply(operand1, operand2) {
        return operand1 * operand2;
    }

    function divide(operand1, operand2) {
        return operand1 / operand2;
    }

    function add(operand1, operand2) {
        return operand1 + operand2;
    }

    function subtract(operand1, operand2) {
        return operand1 - operand2;
    }

    let commands = {
        multiply,
        divide,
        add,
        subtract
    }

    let result = commands[command](numOne, num2);
    console.log(result);
}

calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');
calculator(12, 19, 'add');
calculator(50, 13, 'subtract');