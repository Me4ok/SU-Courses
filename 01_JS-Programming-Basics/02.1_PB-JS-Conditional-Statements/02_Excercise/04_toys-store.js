function toysStore(input1, input2, input3, input4, input5, input6) {
    /*
    • Пъзел - 2.60 лв.
    • Говореща кукла - 3 лв.
    • Плюшено мече - 4.10 лв.
    • Миньон - 8.20 лв.
    • Камионче - 2 лв.

    1. Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
    2. Брой пъзели - цяло число в интервала [0… 1000]
    3. Брой говорещи кукли - цяло число в интервала [0 … 1000]
    4. Брой плюшени мечета - цяло число в интервала [0 … 1000]
    5. Брой миньони - цяло число в интервала [0 … 1000]
    6. Брой камиончета - цяло число в интервала [0 … 1000]
    */
    // products count
    let tripPrice = Number(input1);
    let puzzlesCount = Number(input2);
    let dollsCount = Number(input3);
    let bearsCount = Number(input4);
    let minionsCount = Number(input5);
    let trucksCount = Number(input6);

    // products prices per count
    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let bearPice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let totalEarnings = (puzzlesCount * puzzlePrice) + (dollsCount * dollPrice) + (bearsCount * bearPice) + (minionsCount * minionPrice) + (trucksCount * truckPrice);

    // discount
    if (toysCount >= 50) {
        totalEarnings *= 0.75;
    }

    // rent
    let rent = totalEarnings * 0.1;
    totalEarnings -= rent;
    let diff = totalEarnings - tripPrice;

    if (diff >= 0) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(diff).toFixed(2)} lv needed.`);
    }
}

toysStore(40.8, 20, 25, 30, 50, 10);
toysStore(320, 8, 2, 5, 5, 1);