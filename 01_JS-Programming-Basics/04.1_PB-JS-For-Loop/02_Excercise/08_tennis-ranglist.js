function tennis(input) {
    let tournCount = Number(input[0]);
    let playerPts = Number(input[1]);
    let ptsEarned = 0;
    let tournamentsWon = 0;

    /*
    • W - ако е победител получава 2000 точки
    • F - ако е финалист получава 1200 точки
    • SF - ако е полуфиналист получава 720 точки
    */

    for (let i = 2; i <= tournCount + 1; i++) {
        let phaseReached = input[i];

        switch (phaseReached) {
            case 'W': {
                ptsEarned += 2000;
                tournamentsWon++;
            };
                break;
            case 'F': ptsEarned += 1200; break;
            case 'SF': ptsEarned += 720; break;
        }
    }

    console.log(`Final points: ${playerPts + ptsEarned}`);
    console.log(`Average points: ${Math.floor(ptsEarned / tournCount)}`);
    console.log(`${(tournamentsWon * 100 / tournCount).toFixed(2)}%`);
}

tennis(["5", "1400", "F", "SF", "W", "W", "SF"]);
// tennis(["4", "750", "SF", "W", "SF", "W"]);