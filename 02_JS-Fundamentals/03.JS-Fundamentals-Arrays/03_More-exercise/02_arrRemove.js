function addRemove(arr) {
    let arrOfElements = arr;
    let numToAdd = 1;
    let resultArr = [];
    let lastEntered = null;

    for (let command of arrOfElements) {
        switch (command) {
            case 'add': {
                resultArr.push(numToAdd);
                lastEntered = numToAdd;
                numToAdd++;
            };
                break;
            case 'remove': {
                if (resultArr.length > 0) {
                    numToAdd++;

                    if (resultArr[resultArr.length - 1] == lastEntered) {
                        resultArr.pop();
                    }
                }
            };
                break;
        }
    }

    resultArr.length ? console.log(resultArr.join(' ')) : console.log('Empty');
}

addRemove(['add', 'add', 'add', 'add']);
// addRemove(['add', 'add', 'remove', 'add', 'add']); // 1 4 5
// addRemove(['remove', 'remove', 'remove']);
// addRemove(['add', 'add', 'remove', 'remove', 'add', 'add']); // without check from row 19 -> 5 6 | with check on row 19 -> 1 5 6
