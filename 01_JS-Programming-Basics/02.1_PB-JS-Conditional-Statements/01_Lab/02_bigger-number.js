function biggerNum(input1, input2) {
    // let numA = Number(input[0]);
    // let numB = Number(input[1]);

    // if (numA > numB) {
    //     console.log(numA.toFixed(2));
    // } else {
    //     console.log(numB.toFixed(2));
    // }

    let numA = Number(input1);
    let numB = Number(input2);

    if (numA > numB) {
        console.log(numA);
    } else {
        console.log(numB);
    }
}

biggerNum(["5", "3"]);
biggerNum(["3", "5"]);
biggerNum(["10", "10"]);
biggerNum(["-5", "5"]);