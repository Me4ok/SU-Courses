function grades(input) {
    /*
    // Object way
    let students = {};

    for (let line of input) {
        let [name, ...grades] = line.split(' ');
        grades = grades.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }

        grades.forEach(grade => {
            students[name].push(grade);
        });
    }

    Object.entries(students)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, grades]) => {
            let sum = 0;
            grades.forEach(grade => sum += grade);
            let avgGrade = sum / grades.length;
            console.log(`${name}: ${avgGrade.toFixed(2)}`);
        });
    */

    // Map way
    let students = new Map();

    for (let line of input) {
        let [name, ...grades] = line.split(' ');
        grades = grades.map(Number);

        if (!students.has(name)) {
            students.set(name, []);
        }

        grades.forEach(grade => {
            students.get(name).push(grade);
        });
    }

    Array.from(students) // being Map, written in that way -> 'students', equals to 'students.entries()'
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, grades]) => {
            let sum = 0;
            grades.forEach(grade => sum += grade);
            let avgGrade = sum / grades.length;
            console.log(`${name}: ${avgGrade.toFixed(2)}`);
        });
}

grades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
grades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);