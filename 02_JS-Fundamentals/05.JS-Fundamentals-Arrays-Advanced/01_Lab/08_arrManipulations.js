function arrOps(input) {
    let numsList = input.shift().split(' ');
    let commands = {
        add,
        remove,
        removeAt,
        insert
    }

    /*
    // Option 2
    let commands = {
        add,
        remove,
        removeat: removeAt,
        insert
    }
    */

    for (let combo of input) {
        let [command, p1, p2] = combo.split(' ');

        switch (command) {
            case 'Add': {
                numsList = commands.add(numsList, p1);
            };
                break;
            case 'Remove': {
                numsList = commands.remove(numsList, p1);
            };
                break;
            case 'RemoveAt': {
                numsList = commands.removeAt(numsList, p1);
            };
                break;
            case 'Insert': {
                numsList = commands.insert(numsList, p1, p2);
            };
                break;
        }

        /*
        // Option 2
        numsList = commands[command.toLowerCase()](numsList, p1, p2);       
        */
    }

    function add(arr, num) {
        arr.push(num)
        return arr;
    }
    function remove(arr, num) {
        while (arr.includes(num)) {
            let atIndex = arr.indexOf(num);
            arr.splice(atIndex, 1);
        }

        return arr;
    }
    function removeAt(arr, index) {
        arr.splice(Number(index), 1);
        return arr;
    }
    function insert(arr, symbolToInsert, atIndex) {
        arr.splice(Number(atIndex), 0, symbolToInsert);
        return arr;
    }

    console.log(numsList.join(' '));
}

arrOps([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);
arrOps([
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]);