function sum(input) {
    if (input.length == 0) {
        return;
    }

    const firstElement = Number(input[0]);
    const lastElement = Number(input[input.length - 1]);

    console.log(firstElement + lastElement);
}

sum(['20', '30', '40']);
sum(['5', '10']);
sum([]);