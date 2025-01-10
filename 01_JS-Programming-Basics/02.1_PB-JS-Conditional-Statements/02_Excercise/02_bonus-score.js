function bonus(pts) {
    let bonusPts = 0;

    if (pts <= 100) {
        bonusPts = 5;
    } else if (pts <= 1000) {
        bonusPts = pts * 0.2;
    } else {
        bonusPts = pts * 0.1;
    }

    if (pts % 2 == 0) {
        bonusPts += 1;
    }
    if (pts % 10 == 5) {
        bonusPts += 2;
    }

    let totalPts = pts + bonusPts;

    console.log(`${bonusPts}\n${totalPts}`);
}

bonus(20);
bonus(175);
bonus(2703);
bonus(15875);