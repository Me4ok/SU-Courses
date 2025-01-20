function lowestPrices(input) {
    let list = {};

    for (let row of input) {
        let [city, product, price] = row.split(' | ');
        price = Number(price);
        
        if (list[product] == undefined) {
            list[product] = {
                city,
                price
            }
        }

        if (price < list[product].price) {
            list[product].city = city;
            list[product].price = price;
        }
    }

    // {productName} -> {productLowestPrice} ({townName})
    Object.entries(list).forEach(entry => {
        const [product, info] = entry;
        console.log(`${product} -> ${info.price} (${info.city})`);
    });
}

lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);