function createSortedList() {
    const numsArray = [];

    const operations = {
        add,
        remove,
        get,
        size: 0
    }

    function add(element) {
        numsArray.push(Number(element));
        sort(numsArray);
        operations.size++;
    }

    function remove(index) {
        if (!isValidIndex(numsArray, index)) {
            return;
        }

        numsArray.splice(index, 1);
        sort(numsArray);
        operations.size--;
    }

    function get(index) {
        if (!isValidIndex(numsArray, index)) {
            return;
        }

        return numsArray[index];
    }

    function sort(arr) {
        arr.sort((a, b) => a - b);
    }

    function isValidIndex(arr, index) {
        if (index >= 0 && index < arr.length) {
            return true
        } else {
            return false
        };
    }

    return operations;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));