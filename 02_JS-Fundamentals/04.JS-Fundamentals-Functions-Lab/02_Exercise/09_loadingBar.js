function loadingBar(input) {
    // Loading bar - step 10
    let count = Math.trunc(input / 10);
    let bar = '';

    // create loading bar content filled with input count of "%"
    for (let i = 0; i < count; i++) {
        bar += '%';
    }

    if (input < 100) {
        console.log(`${input}% [${bar}${'.'.repeat(10 - count)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[' + bar + ']');
    }

    /*
    // Loading bar - step 1
    let bar = '';

    // create loading bar content filled with input count of "%"
    for (let i = 0; i < input; i++) {
        bar += '%';
    }

    if (input < 100) {
        console.log(`${input}% [${bar}${'.'.repeat(100 - input)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[' + bar + ']');
    }
    */
}

loadingBar(10);
console.log('---');
loadingBar(30);
console.log('---');
loadingBar(50);
console.log('---');
loadingBar(70);
console.log('---');
loadingBar(90);
console.log('---');
loadingBar(100);