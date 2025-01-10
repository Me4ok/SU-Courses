function outfit(degrees, timeOfDay) {
    let clothes = '';
    let shoes = '';

    switch (timeOfDay) {
        case 'Morning': {
            if (degrees >= 10 && degrees < 19) {
                clothes = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (degrees < 25) {
                clothes = 'Shirt';
                shoes = 'Moccasins';
            } else if (degrees > 24) {
                clothes = 'T-Shirt';
                shoes = 'Sandals';
            }
        };
            break;
        case 'Afternoon': {
            if (degrees >= 10 && degrees < 19) {
                clothes = 'Shirt';
                shoes = 'Moccasins';
            } else if (degrees < 25) {
                clothes = 'T-Shirt';
                shoes = 'Sandals';
            } else if (degrees > 24) {
                clothes = 'Swim Suit';
                shoes = 'Barefoot';
            }
        };
            break;
        case 'Evening': {
            clothes = 'Shirt';
            shoes = 'Moccasins';
        };
            break;
    }

    console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`);
}

outfit(16, "Morning");
outfit(22, "Afternoon");
outfit(28, "Evening");