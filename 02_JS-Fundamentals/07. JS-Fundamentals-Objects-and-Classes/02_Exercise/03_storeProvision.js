function store(store1, store2) {
    let storeProducts = {};

    for (let i = 0; i < store1.length; i += 2) {
        let product = store1[i];
        let productQty = Number(store1[i + 1]);
        storeProducts[product] = productQty;
    }

    for (let i = 0; i < store2.length; i += 2) {
        let product = store2[i];
        let productQty = Number(store2[i + 1]);

        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }
        
        storeProducts[product] += productQty;
    }

    for (let [productName, productQty] of Object.entries(storeProducts)) {
        console.log(`${productName} -> ${productQty}`);
    }
}

store(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
console.log('- - -');
store(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);