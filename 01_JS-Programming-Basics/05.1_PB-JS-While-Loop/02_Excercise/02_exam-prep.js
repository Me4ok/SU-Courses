function prep(input) {
    let i = 0;
    const maxbBadGrades = Number(input[i]); i++;
    let taskName = input[i]; i++;
    let taskGrade = Number(input[i]); i++;
    let countBadGrades = 0;
    let gradesSum = 0;
    let gradesAndTasksCount = 0;
    // let tasksCount = 0;
    let lastTaskName = '';
    let isExpelled = false;

    while (taskName != 'Enough') {
        if (taskGrade <= 4) {
            countBadGrades++;
        }

        gradesAndTasksCount ++;
        gradesSum += taskGrade;
        // tasksCount++;
        lastTaskName = taskName.toString();

        if (countBadGrades == maxbBadGrades) {
            isExpelled = true;
            break;
        }

        taskName = input[i]; i++;
        taskGrade = Number(input[i]); i++;
    }

    if (isExpelled) {
        console.log(`You need a break, ${countBadGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(gradesSum / gradesAndTasksCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradesAndTasksCount}`);
        console.log(`Last problem: ${lastTaskName}`);
    }
}

// prep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
prep(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);