function examTime(examHour, examMin, arrivalHour, arrivalMin) {
    let examInMinutes = examHour * 60 + examMin;
    let arrivalInMinutes = arrivalHour * 60 + arrivalMin;
    let when = '';
    let diff = arrivalInMinutes - examInMinutes;

    if (diff > 0) {
        when = 'Late';
    } else if (diff >= -30 && diff <= 0) {
        when = 'On time';
    } else {
        when = 'Early';
    }

    console.log(when);

    if (diff != 0) {
        let hour = Math.trunc(Math.abs(diff) / 60);
        let minutes = Math.abs(diff) % 60;

        if (diff <= -60) {
            console.log(`${hour}:${minutes.toString().padStart(2, '0')} hours before the start`);
        } else if (diff > -60 && diff < 0) {
            console.log(`${Math.abs(diff)} minutes before the start`);
        } else if (diff > 0 && diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            console.log(`${hour}:${minutes.toString().padStart(2, '0')} hours after the start`);
        }
    }
}

// examTime(9, 30, 9, 50);
// examTime(9, 0, 8, 30);
examTime(16, 0, 15, 0);
// examTime(9, 0, 10, 30);
// examTime(14, 0, 13, 55);
// examTime(11, 30, 8, 12);
// examTime(10, 0, 10, 0);
// examTime(11, 30, 10, 55);
// examTime(11, 30, 12, 19);

// 10:15 12:15