function smallestNumChecker(numOne, numTwo, numThree) {
    let smallestNum = Number.MAX_SAFE_INTEGER;

    // Option 1
    if (numOne < numTwo && numOne < numThree) {
        smallestNum = numOne;
    } else if (numTwo < numOne && numTwo < numThree) {
        smallestNum = numTwo;
    } else if (numThree < numOne && numThree < numTwo) {
        smallestNum = numThree;
    }

    /* 
    let nums = [numOne, numTwo, numThree];

    // Option 2
    for (let num of nums) {
        if (num < smallestNum) {
            smallestNum = num;
        }
    }

    // Option 3
    nums.forEach(num => {
        if (num < smallestNum) {
            smallestNum = num;
        }
    });
    */

    console.log(smallestNum);    
}

smallestNumChecker(2, 5, 3);
smallestNumChecker(600, 342, 123);
smallestNumChecker(25, 21, 24);