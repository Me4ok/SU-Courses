function weekDay(day) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(weekDays[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}

weekDay(1);
weekDay(3);
weekDay(8);