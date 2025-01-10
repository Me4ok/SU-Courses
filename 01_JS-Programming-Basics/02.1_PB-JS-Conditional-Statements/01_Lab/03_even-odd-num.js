function evenOddCheck(input) {
    let num = +input[0];

    if (num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

evenOddCheck(["2"]);
evenOddCheck(["3"]);
evenOddCheck(["25"]);
evenOddCheck(["1024"]);