function check(kindName) {
    let toPrint = '';

    switch (kindName) {
        case 'dog': {
            toPrint = 'mammal';
        };
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': {
            toPrint = 'reptile';
        };
            break;
        default: {
            toPrint = 'unknown';
        };
            break;
    }

    console.log(toPrint);
}

check("dog");
check("snake");
check("cat");