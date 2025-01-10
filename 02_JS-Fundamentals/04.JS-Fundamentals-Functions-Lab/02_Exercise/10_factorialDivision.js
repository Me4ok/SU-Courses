function factorialDivision(numOne, numTwo) {
    function factorial(number) {
        let result = 1;

        for (let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    }

    let numOneFactorial = factorial(numOne);
    let numTwoFactorial = factorial(numTwo);

    console.log((numOneFactorial / numTwoFactorial).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);