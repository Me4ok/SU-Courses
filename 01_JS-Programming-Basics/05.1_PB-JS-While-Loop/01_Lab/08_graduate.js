function graduate(input) {
    let currentGroup = 0;
    let repeatCount = 0;
    let isExpelled = false;
    let sumDegree = 0;
    let i = 0;
    const studentName = input[i];
    i++;
    let currentDegree = Number(input[i]);

    while (i < input.length) {
        if (currentDegree < 4) {
            repeatCount++;
            i++;
            currentDegree = Number(input[i]);

            if (repeatCount > 1) {
                isExpelled = true;
                break;
            }
            continue;
        }

        sumDegree += currentDegree;
        currentGroup++;
        i++;
        currentDegree = Number(input[i]);
    }

    if (isExpelled) {
        console.log(`${studentName} has been excluded at ${currentGroup + 1} grade`);
    } else {
        console.log(`${studentName} graduated. Average grade: ${(sumDegree / currentGroup).toFixed(2)}`);
    }
}

graduate(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
// graduate(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);