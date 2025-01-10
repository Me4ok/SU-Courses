function sumFirstLast(numbers) {
    let firstNumber = Number(numbers[0]);
    let lastNumber = Number(numbers[numbers.length - 1]);
    let sum = firstNumber + lastNumber;
    
    console.log(sum);
}

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);