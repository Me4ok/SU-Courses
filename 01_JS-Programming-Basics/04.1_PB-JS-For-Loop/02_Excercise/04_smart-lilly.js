function smartLilly(age, washingMachinePrice, toyPrice) {
    let savedMoney = 0;
    let moneyToAdd = 0;
    let toysCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneyToAdd += 10;
            savedMoney += moneyToAdd;
            savedMoney--; // Lilly's brother takes 1 lev each even
        } else {
            toysCount++;
        }
    }

    savedMoney += (toysCount * toyPrice);
    let diff = savedMoney - washingMachinePrice;

    if (diff >= 0) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(diff).toFixed(2)}`);
    }
}

// smartLilly(10, 170, 6);
smartLilly(21, 1570.98, 3);