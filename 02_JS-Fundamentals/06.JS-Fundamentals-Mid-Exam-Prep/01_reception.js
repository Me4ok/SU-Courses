function reception(input) {
    const firstEmplHandlePerHour = Number(input.shift());
    const secondEmplHandlePerHour = Number(input.shift());
    const thirdEmplHandlePerHour = Number(input.shift());
    const studentsCount = Number(input.shift());
    const servicedStudPerHour = firstEmplHandlePerHour + secondEmplHandlePerHour + thirdEmplHandlePerHour;
    let hoursRequired = 0;
    
    if ((servicedStudPerHour > studentsCount) && (studentsCount > 0)) {
        hoursRequired = 1;
    } else {
        hoursRequired = Math.ceil(studentsCount / servicedStudPerHour); // round up count, as even if 1 student left unhandled, it would go for the next hour
        let breakHours = 0;
        let breakCounter = 0;
        for (let i = 1; i < hoursRequired; i++) {
            breakCounter++;

            if (breakCounter == 3) {
                breakHours++;
                breakCounter = 0;
            }
        }

        hoursRequired += breakHours;
    }

    console.log(`Time needed: ${hoursRequired}h.`)
}

reception(['5','6','4','20']); // 2 - 15 students/hour
reception(['1','2','3','45']); // 10 - 6 students/hour
reception(['3','2','5','40']); // 5 - 10 students/hour
reception(['1','1','1','18']);