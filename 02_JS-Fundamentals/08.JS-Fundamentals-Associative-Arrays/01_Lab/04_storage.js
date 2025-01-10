function storage(input) {
    /*
    // Map way
    let storage = new Map();

    for (let line of input) {
        let [product, qty] = line.split(' ');
        qty = Number(qty);
        let currentQty = 0;

        if (!storage.has(product)) {
            storage.set(product, 0);
        } else {
            currentQty = storage.get(product);
        }

        storage.set(product, currentQty + qty);
    }

    for (let [product, qty] of storage) {
        console.log(product, '->', qty);
    }
    */

    // Object way
    let storage = {};

    for (let line of input) {
        let [prod, qty] = line.split(' ');
        qty = Number(qty);

        if (!storage.hasOwnProperty(prod)) {
            storage[prod] = qty;
        } else {
            storage[prod] += qty;
        }
    }

    for (let prod in storage) {
        console.log(prod, '->', storage[prod]);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
storage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);