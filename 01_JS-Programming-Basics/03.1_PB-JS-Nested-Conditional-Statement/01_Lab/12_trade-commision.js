function commision(city, sellsVol) {
    let isError = false;
    let commisionInPerc = 0;
    
    if (city == 'Sofia') {
        if (sellsVol < 0) {
            isError = true;
        } else if (sellsVol <= 500) {
            commisionInPerc = 5;
        } else if (sellsVol <= 1000) {
            commisionInPerc = 7;
        } else if (sellsVol <= 10000) {
            commisionInPerc = 8;
        } else {
            commisionInPerc = 12;
        }
    } else if (city == 'Plovdiv') {
        if (sellsVol < 0) {
            isError = true;
        } else if (sellsVol <= 500) {
            commisionInPerc = 5.5;
        } else if (sellsVol <= 1000) {
            commisionInPerc = 8;
        } else if (sellsVol <= 10000) {
            commisionInPerc = 12;
        } else {
            commisionInPerc = 14.5;
        }
    } else if (city == 'Varna') {
        if (sellsVol < 0) {
            isError = true;
        } else if (sellsVol <= 500) {
            commisionInPerc = 4.5;
        } else if (sellsVol <= 1000) {
            commisionInPerc = 7.5;
        } else if (sellsVol <= 10000) {
            commisionInPerc = 10;
        } else {
            commisionInPerc = 13;
        }
    } else {
        isError = true;
    }

    if (!isError) {
        let profit = sellsVol * commisionInPerc / 100;
        console.log(profit.toFixed(2));
    } else {
        console.log('error');
    }
}

commision("Sofia", 1500);
commision('Plovdiv', 499.99);
commision('Varna', 3874.5);
commision('Kaspitchan', 135);
commision('Plovdiv', -135);