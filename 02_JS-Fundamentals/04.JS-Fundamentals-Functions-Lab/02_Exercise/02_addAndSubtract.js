function addAndSubtract(numOne, numTwo, numThree) {
    
    function sumOfTwoNumbers(numberOne, numberTwo) {
        return numberOne + numberTwo;
    }

    function subtract(numberThree, numberFour) {
        return numberThree - numberFour;
    }

    console.log(subtract(sumOfTwoNumbers(numOne, numTwo), numThree))
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);