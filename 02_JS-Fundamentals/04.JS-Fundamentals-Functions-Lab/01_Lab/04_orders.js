function orders(input1, input2) {
    let product = input1;
    let count = Number(input2);
    let result = 0;

    switch (product) {
        case 'coffee': {
            result = 1.5 * count;
        };
            break;
        case 'water': {
            result = 1 * count;
        };
            break;
        case 'coke': {
            result = 1.4 * count;
        };
            break;
        case 'snacks': {
            result = 2 * count;
        };
            break;
    }

    console.log(result.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);