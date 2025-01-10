function sum(num1, num2, magicNum) {
    let combosCount = 0;
    let magicNumFound = false;

    for (let a = num1; a <= num2; a++) {
        for (let b = num1; b <= num2; b++) {
            combosCount++;
            let result = a + b;

            if (result == magicNum) {
                magicNumFound = true;
                console.log(`Combination N:${combosCount} (${a} + ${b} = ${magicNum})`);
                break;
            }
        }

        if (magicNumFound) {
            break;
        }
    }

    if (!magicNumFound) {
        console.log(`${combosCount} combinations - neither equals ${magicNum}`);
    }
}

sum(1, 10, 5);
// sum(23, 24, 20);
// sum(88, 888, 1000);
// sum(88, 888, 2000);