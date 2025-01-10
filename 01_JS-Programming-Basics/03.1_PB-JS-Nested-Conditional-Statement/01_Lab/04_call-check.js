function check(age, gender) {
    let toPrint = '';

    if (gender == 'm') {
        if (age < 16) {
            toPrint = 'Master';
        } else {
            toPrint = 'Mr.';
        }
    } else if (gender == 'f') {
        if (age < 16) {
            toPrint = 'Miss';
        } else {
            toPrint = 'Ms.';
        }
    }

    console.log(toPrint);
}

check(12, "f");
check(17, "m");
check(25, "f");
check(13.5, "m");