function firstLast(input) {
    let result = 0;

    if (input.length > 0) {
        result += Number(input.slice(0, 1)[0]) + Number(input.slice(-1)[0]);
    } else {
        result += Number(input[0]);
    }

    console.log(result);
}

firstLast(['20', '30', '40']);
firstLast(['5', '10']);