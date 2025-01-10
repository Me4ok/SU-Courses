function skiTrip(days, where, rate) {
    let totalPrice = 0;

    switch (where) {
        case 'room for one person': {
            totalPrice = (days - 1) * 18;
        };
            break;
        case 'apartment': {
            totalPrice = (days - 1) * 25;

            if (days < 10) {
                totalPrice *= 0.7;
            } else if (days < 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.5;
            }
        };
            break;
        case 'president apartment': {
            totalPrice = (days - 1) * 35;

            if (days < 10) {
                totalPrice *= 0.9;
            } else if (days < 15) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.8;
            }
        };
            break;
    }

    if (rate == 'positive') {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));
}

skiTrip(14, "apartment", "positive");
skiTrip(30, "president apartment", "negative");
skiTrip(12, "room for one person", "positive");
skiTrip(2, "apartment", "positive");