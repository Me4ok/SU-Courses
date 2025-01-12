function mutlipleCriterias(input) {
    let result = input.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
    console.log(result.join('\n'));
}

mutlipleCriterias(['alpha', 'beta', 'gamma']);
mutlipleCriterias(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
mutlipleCriterias(['test', 'Deny', 'omen', 'Default']);