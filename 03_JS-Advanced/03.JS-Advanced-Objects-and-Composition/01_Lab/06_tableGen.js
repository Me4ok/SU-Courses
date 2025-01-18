function tableGenerator(input) {
    const info = JSON.parse(input);
    let studentsInfo = {};

    info.forEach(student => {
        for (let [key, value] of Object.entries(student)) {
            key = key.trim();
            if (!studentsInfo[key]) {
                studentsInfo[key] = [];
            }
            studentsInfo[key].push(value);
        }
    });

    // Form table header
    let tableHeader = '   <tr>';
    Object.keys(studentsInfo).forEach(key => {
        tableHeader += `<th>${key}</th>`;
    });
    tableHeader += '</tr>';

    // Form table rows
    let tableRows = '';
    for (let i = 0; i < info.length; i++) {
        let row = '   <tr>';
        const rowInfo = info[i];
        Object.keys(rowInfo).forEach(key => {
            row += `<td>${rowInfo[key]}</td>`;
        });
        tableRows += row + '</tr>' + `${i != info.length - 1 ? '\n' : ''}`;
        // `${i != info.length - 1 ? '\n' : ''}`; - is to avoid adding new line, when end of info array is reached
    }

    const table = `<table>\n${tableHeader}\n${tableRows}\n</table>`;
    console.log(table);
}

// tableGenerator(`[{"Name":"Stamat","Score":5.5}, {"Name":"Rumen","Score":6}]`);
tableGenerator(`[{"Name":"Pesho","Score":4," Grade":8}, {"Name":"Gosho","Score":5," Grade":8}, {"Name":"Angel","Score":5.50," Grade":10}]`);