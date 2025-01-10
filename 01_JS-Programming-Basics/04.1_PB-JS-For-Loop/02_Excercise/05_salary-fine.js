function salaryFine(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let fine = 0;
    let noSalary = false;

    for (let i = 2; i <= openTabs + 2; i++) {
        switch (input[i]) {
            case 'Facebook': fine += 150; break;
            case 'Instagram': fine += 100; break;
            case 'Reddit': fine += 50; break;
        }

        if (fine >= salary) {
            noSalary = true;
            break;
        }
    }

    if (noSalary) {
        console.log('You have lost your salary.');
    } else {
        console.log(Math.floor(salary - fine));
    }
}

// salaryFine(([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]));
// salaryFine([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
salaryFine([3, 500, 'Facebook', 'Stackoverflow.com', 'softuni.bg'])