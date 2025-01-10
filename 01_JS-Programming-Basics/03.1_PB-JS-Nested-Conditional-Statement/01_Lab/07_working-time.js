function workingTime(hour, day) {
    let status = '';

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday': {
            if (hour >= 10 && hour <= 18) {
                status = 'open';
            } else {
                status = 'closed';
            }
        };
            break;
        case 'Sunday': status = 'closed';
            break;
    }

    console.log(status);
}

workingTime(11, "Monday");
workingTime(19, "Friday");
workingTime(11, "Sunday");