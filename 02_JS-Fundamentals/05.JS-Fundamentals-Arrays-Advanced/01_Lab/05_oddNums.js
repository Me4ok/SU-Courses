function oddNums(nums) {
    console.log(nums
        .filter((x, i) => i % 2 == 1)
        .map(el => el * 2)
        .reverse()
        .join(' ')
    );
}

oddNums([10, 15, 20, 25]);
oddNums([3, 0, 10, 4, 7, 3]);