function movie(budget, statsCount, clothesPricePerStat) {
    let decor = budget * 0.1;
    let clothesPrice = statsCount * clothesPricePerStat;

    if (statsCount > 150) {
        clothesPrice *= 0.9;
    }

    let totalSpend = decor + clothesPrice;
    let diff = budget - totalSpend;

    if (diff >= 0) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${Math.abs(diff).toFixed(2)} leva more.`);
    }
}

movie(20000, 120, 55.5);
movie(15437.62, 186, 57.99);
movie(9587.88, 222, 55.68);