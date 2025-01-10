function employeesList(input) {
    class Employee {
        constructor(name, personalIdentNumber) {
            this.name = name;
            this.persIdentNumber = personalIdentNumber;
        }
    }

    let employeesList = {};

    for (let i = 0; i < input.length; i++) {
        let employeeName = input[i];
        const emplPersNumber = employeeName.length;
        let employeeInfo = new Employee(employeeName, emplPersNumber);
        employeesList['empl' + (i + 1)] = employeeInfo;
    }

    // Name: {employeeName} -- Personal Number: {personalNum}
    for (let props of Object.keys(employeesList)) {
        let name = employeesList[props].name;
        let personalNumber = employeesList[props].persIdentNumber;
        console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
    }
}

employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employeesList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);