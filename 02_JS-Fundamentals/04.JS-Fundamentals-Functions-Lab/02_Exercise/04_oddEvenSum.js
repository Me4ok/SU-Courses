function oddEvenSum(number) {
    let string = number.toString();
    let oddNumbersSum = 0;
    let evenNumberSum = 0;

    for (let i = 0; i < string.length; i++) {
        let num = Number(string[i]);
        num % 2 == 0 ? evenNumberSum += num : oddNumbersSum += num;
    }

    console.log(`Odd sum = ${oddNumbersSum}, Even sum = ${evenNumberSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);