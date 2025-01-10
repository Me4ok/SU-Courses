function shop(fruit, dayOfWeek, qty) {
    let price = 0;
    let isError = false;

    switch (dayOfWeek) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': {
            switch (fruit) {
                case 'banana': {
                    price = qty * 2.5;
                };
                    break;
                case 'apple': {
                    price = qty * 1.20;
                };
                    break;
                case 'orange': {
                    price = qty * 0.85;
                };
                    break;
                case 'grapefruit': {
                    price = qty * 1.45;
                };
                    break;
                case 'kiwi': {
                    price = qty * 2.70;
                };
                    break;
                case 'pineapple': {
                    price = qty * 5.5;
                };
                    break;
                case 'grapes': {
                    price = qty * 3.85;
                };
                    break;
                default: isError = true;
                    break;
            }
        };
            break;
        case 'Saturday':
        case 'Sunday': {
            switch (fruit) {
                case 'banana': {
                    price = qty * 2.7;
                };
                    break;
                case 'apple': {
                    price = qty * 1.25;
                };
                    break;
                case 'orange': {
                    price = qty * 0.90;
                };
                    break;
                case 'grapefruit': {
                    price = qty * 1.60;
                };
                    break;
                case 'kiwi': {
                    price = qty * 3.00;
                };
                    break;
                case 'pineapple': {
                    price = qty * 5.6;
                };
                    break;
                case 'grapes': {
                    price = qty * 4.2;
                };
                    break;
                default: isError = true;
                    break;
            }
        };
            break;
        default: isError = true;
            break;
    }

    if (!isError) {
        console.log(price.toFixed(2));
    } else {
        console.log('error');
    }
}

shop("apple", "Tuesday", 2);
shop("orange", "Sunday", 3);
shop("kiwi", "Monday", 2.5);
shop("grapes", "Saturday", 0.5);
shop('tomato', 'Monday', 0.5);