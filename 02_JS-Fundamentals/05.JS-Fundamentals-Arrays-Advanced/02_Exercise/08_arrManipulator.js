function maniupilator(input1, input2) {
    let nums = input1.slice();
    let commands = input2.slice();
    let list = {
        add,
        addMany,
        contains,
        remove,
        shift,
        sumPairs,
        print
    }

    for (let command of commands) {
        const [action, ...params] = command.split(' ');
        nums = list[action](nums, params);
        if (action == 'print') {
            // if print -> stop receiving more commands
            break;
        }
        /*
        if (command.includes('add')) {

        } else if (command.includes('addMany')) {

        } else if (command.includes('contains')) {

        } else if (command.includes('remove')) {

        } else if (command.includes('shift')) {

        } else if (command.includes('sumPairs')) {

        } else if (command.includes('print')) {

        }
        */
    }

    function add(array, values) {
        // add <index> <element>
        const [index, number] = values.map(Number); // map to number each array(number) element
        array.splice(index, 0, number);
        return array;
    }
    function addMany(array, values) {
        // addMany <index><element 1> <element 2> … <element n>
        values = values.map(Number);
        array.push(...values);
        return array;
    }
    function contains(array, element) {
        // contains <element>
        console.log(array.indexOf(Number(element[0])));
        return array;
    }
    function remove(array, index) {
        // remove <index>
        index = Number(index);
        array.splice(index, 1);
        return array;
    }
    function shift(array, shifts) {
        // shift <positions>
        for (let i = 0; i < shifts; i++) {
            array.push(array.shift());
        }
        return array;
    }
    function sumPairs(array) {
        let tempArray = array.slice();
        let resultArray = [];
        for (let i = 0; i < array.length / 2; i++) {
            let numOne = tempArray.shift();
            let numTwo = tempArray.shift();
            resultArray.push(numOne + numTwo);
        }
        return resultArray;
    }
    function print(array) {
        console.log(`[ ${array.join(', ')} ]`);
    }
}

maniupilator(
    [1, 2, 4, 5, 6, 7], // 6
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);
maniupilator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);