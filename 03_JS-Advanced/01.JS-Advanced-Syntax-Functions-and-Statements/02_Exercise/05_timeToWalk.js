function walkingTime(stepsCount, footprinM, speedKmH) {
    const distanceInM = stepsCount * footprinM;
    const speedInMPers = speedKmH * 1000 / 3600;
    let totalTimeInSeconds = distanceInM / speedInMPers;
    const breakTimeInSeconds = Math.floor(distanceInM / 500) * 60;
    totalTimeInSeconds += breakTimeInSeconds;
    let timeToWorkWith = Number(totalTimeInSeconds.toString());

    let hours = Math.floor(timeToWorkWith / 3600);
    timeToWorkWith -= hours * 3600;
    let minutes = Math.floor(timeToWorkWith / 60);
    timeToWorkWith -= minutes * 60;
    let seconds = Math.round(timeToWorkWith);
    
    console.log(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`);

    if (seconds > 60) {
        minutes++;
        seconds -= 60;
    }
    if (minutes > 60) {
        hours++;
        minutes -= 60;
    }
}

walkingTime(4000, 0.60, 5);
walkingTime(2564, 0.70, 5.5);