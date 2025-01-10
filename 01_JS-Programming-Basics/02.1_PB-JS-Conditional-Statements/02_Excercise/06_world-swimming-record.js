function record(recordInS, lenghtM, secondsPerM) {
    let swimTimeInS = lenghtM * secondsPerM;
    let delayInS = Math.floor(lenghtM / 15) * 12.5;
    let totalSwimTime = swimTimeInS + delayInS;

    let diff = recordInS - totalSwimTime;

    if (diff > 0) {
        console.log(`Yes, he succeeded! The new world record is ${totalSwimTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${Math.abs(diff).toFixed(2)} seconds slower.`);
    }

    // if (totalSwimTime < recordInS) {
    //     console.log(`Yes, he succeeded! The new world record is ${totalSwimTime.toFixed(2)} seconds.`);
    // } else {
    //     console.log(`No, he failed! He was ${(totalSwimTime - recordInS).toFixed(2)} seconds slower.`);
    // }
}

record(10464, 1500, 20);
record(55555.67, 3017, 5.03);