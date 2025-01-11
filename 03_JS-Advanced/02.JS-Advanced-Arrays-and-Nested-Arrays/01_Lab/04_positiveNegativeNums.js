function nums(nums) {
    let result = [];

    for (let num of nums) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join('\n'));
}

nums([7, -2, 8, 9]);
nums([3, -2, 0, -1]);