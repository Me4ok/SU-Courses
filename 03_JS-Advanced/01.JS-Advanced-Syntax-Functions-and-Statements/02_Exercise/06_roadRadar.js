function roadRadar(speedKmH, area) {
    let drivingType = '';
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    let speedLimit = speedLimits[area];
    let diff = speedKmH - speedLimit;
    
    if (diff <= 0) {
        // normal driving, print ok message
    } else if (diff <= 20) {
        drivingType = 'speeding';
    } else if (diff <= 40) {
        drivingType = 'excessive speeding';
    } else {
        drivingType = 'reckless driving';
    }

    if (diff > 0) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${drivingType}`)
    } else {
        console.log(`Driving ${speedKmH} km/h in a ${speedLimit} zone`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');