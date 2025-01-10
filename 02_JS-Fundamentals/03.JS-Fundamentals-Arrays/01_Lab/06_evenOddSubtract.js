function evenOddSubtract(numbers) {
    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (let num of numbers) {
        if (num % 2 == 0) {
            sumOfEven += num;
        } else {
            sumOfOdd += num;
        }
    }

    console.log(sumOfEven - sumOfOdd);
}

evenOddSubtract([1,2,3,4,5,6]); // 12 - 9 = 3
evenOddSubtract([3,5,7,9]); // 0 - 24 = -24
evenOddSubtract([2,4,6,8,10]); // 30 - 0 = 30