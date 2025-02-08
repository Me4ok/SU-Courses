function listProc(input) {
    let result = [];

    const commands = {
        add: (string) => {
            result.push(string);
        },
        remove: (string) => {
            result = result.filter(word => word != string);
        },
        print: () => console.log(result.join(','))
    }

    for (let row of input) {
        const [command, string] = row.split(' ');
        commands[command](string);
    }
}

listProc(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProc(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);