function dayCheck(day) {
    let toPrint = '';

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': {
            console.log('Working day');
        };
            break;
        case 'Saturday':
        case 'Sunday': {
            console.log('Weekend');
        };
            break;
        default: {
            console.log('Error');
        };
            break;
    }
}

dayCheck('Monday');
dayCheck('Wednesday');
dayCheck('Wednesday');
dayCheck('Saturday');
dayCheck('Sunday');
dayCheck('check');
dayCheck('oreo');

// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday