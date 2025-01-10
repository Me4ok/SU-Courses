function compare(input) {
    const num = Number(input[0]);
    let nextNum = 1;

    while (num >= nextNum) {
        console.log(nextNum);
        nextNum = nextNum * 2 + 1;
    }
}

// compare(['3']);
// compare(['8']);
// compare(['17']);
compare(['31']);