function signCheck(numOne, numTwo, numThree) {
    let numsCollection = [numOne, numTwo, numThree];
    let negativesCount = 0;

    numsCollection.forEach(num => {
        {
            num < 0 ? negativesCount++ : negativesCount;
        }
    });

    if (negativesCount % 2 == 0) {
        return 'Positive';
    } else {
        return 'Negtive';
    }
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));