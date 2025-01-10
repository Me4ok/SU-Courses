function shopping(budget, vcCount, procCount, ramCount) {
    let vcPricePerItem = 250;
    let vcTotalPrice = vcCount * vcPricePerItem;

    let procPricePerItem = vcTotalPrice * 0.35;
    let ramPricePerItem = vcTotalPrice * 0.1;

    let procTotalPrice = procCount * procPricePerItem;
    let ramTotalPrice = ramCount * ramPricePerItem;

    let totalPrice = vcTotalPrice + procTotalPrice + ramTotalPrice;

    // total price discount
    if (vcCount > procCount) {
        totalPrice *= 0.85;
    }

    let diff = budget - totalPrice;

    if (diff >= 0) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva more!`);
    }
}

shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);