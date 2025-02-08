function solution() {
    let string = '';
    /*
    append(string) - append the given string at the end of the internal string
    removeStart(n) - remove the first n characters from the string, n is an integer
    removeEnd(n) - remove the last n characters from the string, n is an integer
    print - print the stored string on the console
    */

    function append(input) {
        string += input;
    }

    function removeStart(number) {
        string = string.substring(number);
    }

    function removeEnd(number) {
        string = string.substring(0, -number);
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// let secondZeroTest = solution();

// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print();