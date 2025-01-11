function sameNumber(input) {
    let same = true;
    let sum = 0;
    let nums = input.toString().split('');

    for (let i = 0; i < nums.length; i++) {
        let currentNum = Number(nums[i]);
        sum += currentNum;

        if (currentNum != Number(nums[0])) {
            same = false;
        }
    }

    same ? console.log('true') : console.log('false');
    console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);