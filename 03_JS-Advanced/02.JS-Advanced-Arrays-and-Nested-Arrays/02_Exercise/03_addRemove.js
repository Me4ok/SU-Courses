function addRemove(commands) {
    let numToAdd = 0;
    let result = [];

    for (let command of commands) {
        numToAdd++;
        switch (command) {
            case 'add': {
                result.push(numToAdd);
            };
                break;
            case 'remove': {
                if (result.length > 0) {
                    result = result.slice(0, result.length - 1);
                }
            };
                break;
        }
    }

    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}

addRemove(['add', 'add', 'add', 'add']);
console.log('---');
addRemove(['add', 'add', 'remove', 'add', 'add']);
console.log('---');
addRemove(['remove', 'remove', 'remove']);