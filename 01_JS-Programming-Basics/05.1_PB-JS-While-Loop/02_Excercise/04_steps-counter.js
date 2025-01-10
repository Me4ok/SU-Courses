function steps(input) {
    const stepsGoal = 10000;
    let goalReached = false;
    let stepsCount = 0;
    let i = 0;
    let value = input[i]; i++;

    while (goalReached != true) {
        if (value == 'Going home') {
            stepsCount += Number(input[i]);
            break;
        }

        stepsCount += Number(value);
        value = input[i]; i++;

        if (stepsCount >= stepsGoal) {
            goalReached = true;
        }
    }

    const diff = stepsCount - stepsGoal;

    if (diff >= 0) {
        console.log('Goal reached! Good job!');
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${Math.abs(diff)} more steps to reach goal.`);
    }
}

// steps(["1000", "1500", "2000", "6500"]);
steps(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
steps(["1500", "300", "2500", "3000", "Going home", "200"]);
// steps(["125", "250", "4000", "30", "2678", "4682"]);