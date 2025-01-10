function time(h, m) {
    let resultM = m + 15;
    
    if (resultM >= 60) {
        h++;
        resultM -= 60;
    }

    if (h > 23) {
        h = 0;
    }

    // if (resultM < 10) {
    //     console.log(`${h}:0${resultM}`);
    // } else {
    //     console.log(`${h}:${resultM}`);
    // }

    console.log(`${h}:${resultM.toString().padStart(2, '0')}`);
}

time(1, 46);
time(0, 1);
time(23, 59);
time(11, 8);
time(12, 49);