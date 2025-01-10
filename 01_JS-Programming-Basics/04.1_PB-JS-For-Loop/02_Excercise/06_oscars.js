function oscars(input) {
    let actor = input[0];
    let actorPts = Number(input[1]);
    let judgesCount = Number(input[2]);
    let isWinning = false;

    for (let i = 3; i <= judgesCount * 2 + 2; i += 2) {
        let judgeName = input[i];
        let judgePts = Number(input[i + 1]);
        actorPts += judgeName.length * judgePts / 2;

        if (actorPts > 1250.5) {
            isWinning = true;
            break;
        }
    }

    if (isWinning) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${actorPts.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - actorPts).toFixed(1)} more!`);
    }
}

// oscars(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);