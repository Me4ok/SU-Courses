function getFibonator() {
    let nums = [0, 1];

    return function () {
        const beforeLastNum = Number(nums[nums.length - 2]);
        const lastNum = Number(nums[nums.length - 1]);
        nums.push(beforeLastNum + lastNum);
        return lastNum;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13