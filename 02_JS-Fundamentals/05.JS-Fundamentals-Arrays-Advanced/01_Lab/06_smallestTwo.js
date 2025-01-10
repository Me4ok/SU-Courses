function smallestTwo(nums){
    let resultArr = nums.sort((a, b) => a - b);
    
    console.log(resultArr.slice(0, 2).join(' '));
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);