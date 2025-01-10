function dayOfWeek(day) {
    let toPrint = '';
    switch (day) {
        case 1: {
            toPrint = 'Monday';
        };
            break;
        case 2: {
            toPrint = 'Tuesday';
        };
            break;
        case 3: {
            toPrint = 'Wednesday';
        };
            break;
        case 4: {
            toPrint = 'Thursday';
        };
            break;
        case 5: {
            toPrint = 'Friday';
        };
            break;
        case 6: {
            toPrint = 'Saturday';
        };
            break;
        case 7: {
            toPrint = 'Sunday';
        };
            break;
        default: {
            toPrint = 'Error';
        };
            break;
    }

    console.log(toPrint);
}

dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(15);
dayOfWeek(-15);