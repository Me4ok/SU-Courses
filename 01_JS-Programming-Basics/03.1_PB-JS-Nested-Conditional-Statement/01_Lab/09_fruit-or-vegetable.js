function typeCheck(productName) {
    let type = '';

    switch (productName) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes': type = 'fruit';
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot': type = 'vegetable';
            break;
        default: type = 'unknown';
            break;
    }

    console.log(type);
}

typeCheck('banana');
typeCheck('apple');
typeCheck('onion');
typeCheck('cucumber');