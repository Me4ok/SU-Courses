function hotel(month, staysQty) {
    /*
    Май и октомври	            | Юни и септември	             | Юли и август
    Студио – 50 лв./нощувка	    | Студио – 75.20 лв./нощувка	 | Студио – 76 лв./нощувка
    Апартамент – 65 лв./нощувка	| Апартамент – 68.70 лв./нощувка | Апартамент – 77 лв./нощувка

    May, June, July, August, September или October

    • За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
    • За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
    • За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
    • За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
    */
    let studioFullPrice = 0;
    let apartmentFullPrice = 0;

    if (month == 'May' || month == 'October') {
        studioFullPrice = staysQty * 50;
        apartmentFullPrice = staysQty * 65;

        // discount
        if (staysQty > 7 && staysQty <= 14) {
            studioFullPrice *= 0.95;
        } else if (staysQty > 14) {
            studioFullPrice *= 0.7;
        }
    } else if (month == 'June' || month == 'September') {
        studioFullPrice = staysQty * 75.20;
        apartmentFullPrice = staysQty * 68.70;

        // discount
        if (staysQty > 14) {
            studioFullPrice *= 0.8;
        }
    } else if (month == 'July' || month == 'August') {
        studioFullPrice = staysQty * 76;
        apartmentFullPrice = staysQty * 77;
    }

    if (staysQty > 14) {
        apartmentFullPrice *= 0.9;
    }

    console.log(`Apartment: ${apartmentFullPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioFullPrice.toFixed(2)} lv.`);
}

hotel("May", 15);
hotel("June", 14);
hotel("August", 20);