function tickets(day, age) {
    let price;

    if (age >= 0 && age <= 122) {
        switch (day) {
            case 'Weekday': {
                if (age > 18 && age <= 64) {
                    price = 18;
                } else {
                    price = 12;
                }
            }; break;
            case 'Weekend': {
                if (age > 18 && age <= 64) {
                    price = 20;
                } else {
                    price = 15;
                }
            }; break;
            case 'Holiday': {
                if (age <= 18) {
                    price = 5;
                } else if (age <= 64) {
                    price = 12;
                } else {
                    price = 10;
                }
            }; break;
        }

        // print number
        console.log(price + '$');
    } else {
        // print error
        console.log('Error!');
    }

    // if (price != -1) {
    //     // print number
    //     console.log(price + '$');
    // } else {
    //     // print error
    //     console.log('Error!');
    // }
}

tickets('Weekday', 42);
tickets('Holiday', -12);
tickets('Holiday', 15);
tickets('Snow day', 15);
tickets('Weekend', 66);
tickets('Weekday', 35);
tickets('Weekend', 35);