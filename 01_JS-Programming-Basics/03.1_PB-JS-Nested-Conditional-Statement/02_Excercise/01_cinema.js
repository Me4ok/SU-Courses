function cinema(type, rows, cols) {
    let incomeAmount = 0;

    switch (type) {
        case 'Premiere': {
            incomeAmount = Number(rows) * Number(cols) * 12;
        };
            break;
        case 'Normal': {
            incomeAmount = Number(rows) * Number(cols) * 7.5;
        };
            break;
        case 'Discount': {
            incomeAmount = Number(rows) * Number(cols) * 5;
        };
            break;
    }

    console.log(`${incomeAmount.toFixed(2)} leva`);
}

cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);