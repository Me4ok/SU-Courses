function smallest(nums) {
    return nums.sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
}

console.log(smallest([30, 15, 50, 5]));
console.log(smallest([3, 0, 10, 4, 7, 3]));