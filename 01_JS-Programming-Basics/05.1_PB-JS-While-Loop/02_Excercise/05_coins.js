function coins(change) {
    let amountInSt = Math.floor(change * 100);
    let coinsQty = 0;

    // 2 lev, 1 lev, 50 st, 20 st, 10 st, 5 st, 2 st, 1 st

    while (amountInSt > 0) {
        if (amountInSt >= 200) {
            let interimSt = amountInSt % 200; // Ex.: 403 % 200 = 3
            coinsQty += (amountInSt - interimSt) / 200;
            amountInSt = interimSt;
        }

        if (amountInSt >= 100) {
            let interimSt = amountInSt % 100;
            coinsQty += (amountInSt - interimSt) / 100;
            amountInSt = interimSt;
        }

        if (amountInSt >= 50) {
            let interimSt = amountInSt % 50;
            coinsQty += (amountInSt - interimSt) / 50;
            amountInSt = interimSt;
        }

        if (amountInSt >= 20) {
            let interimSt = amountInSt % 20;
            coinsQty += (amountInSt - interimSt) / 20;
            amountInSt = interimSt;
        }

        if (amountInSt >= 10) {
            let interimSt = amountInSt % 10;
            coinsQty += (amountInSt - interimSt) / 10;
            amountInSt = interimSt;
        }

        if (amountInSt >= 5) {
            let interimSt = amountInSt % 5;
            coinsQty += (amountInSt - interimSt) / 5;
            amountInSt = interimSt;
        }

        if (amountInSt >= 2) {
            let interimSt = amountInSt % 2;
            coinsQty += (amountInSt - interimSt) / 2;
            amountInSt = interimSt;
        }

        if (amountInSt >= 1) {
            let interimSt = amountInSt % 1;
            coinsQty += (amountInSt - interimSt) / 1;
            amountInSt = interimSt;
        }
    }

    console.log(coinsQty);
}

coins(0.14);
// coins(2.23);
// coins(1.23);
// coins(2);
// coins(0.56);
// coins(2.73);