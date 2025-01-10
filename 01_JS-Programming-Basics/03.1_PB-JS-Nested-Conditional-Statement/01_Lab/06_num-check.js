function numCheck(number) {
    if (number >= -100 && number <= 100 && number != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

numCheck(-100);
numCheck(0);
numCheck(100);