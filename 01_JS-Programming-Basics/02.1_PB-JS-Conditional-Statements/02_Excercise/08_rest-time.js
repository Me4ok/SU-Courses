function restTime(seriesName, epLenM, breakLenM) {
    let launchTimeM = breakLenM / 8;
    let restTimeM = breakLenM / 4;
    let watchTimeLeftM = breakLenM - (launchTimeM + restTimeM);

    let diff = watchTimeLeftM - epLenM;
    
    if (diff >= 0) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(Math.abs(diff))} more minutes.`);
    }
}

restTime("Game of Thrones", 60, 96);
restTime("Teen Wolf", 48, 60);