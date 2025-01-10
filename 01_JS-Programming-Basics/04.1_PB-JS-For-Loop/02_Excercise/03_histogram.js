function histogram(input) {
    let numsCount = input[0];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numsCount; i++) {
        if (input[i] < 200) {
            p1++;
        } else if (input[i] < 400) {
            p2++;
        } else if (input[i] < 600) {
            p3++;
        } else if (input[i] < 800) {
            p4++;
        } else {
            p5++;
        }
    }

    console.log(`${(p1 * 100 / numsCount).toFixed(2)}%\n${(p2 * 100 / numsCount).toFixed(2)}%\n${(p3 * 100 / numsCount).toFixed(2)}%\n${(p4 * 100 / numsCount).toFixed(2)}%\n${(p5 * 100 / numsCount).toFixed(2)}%`);
}

histogram(([3, 1, 2, 999]));
// histogram(([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]));