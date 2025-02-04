function store(input) {
    const sortedArr = input.sort((a, b) => (a.toLowerCase()).localeCompare(b.toLowerCase()));
    let catalog = {};

    for (let productInfo of input) {
        let [product, price] = productInfo.split(' : ');
        price = Number(price);        
        const firstLetter = product[0];
        
        if (!catalog[firstLetter]) {
            catalog[firstLetter] = [];
        }

        catalog[firstLetter].push(`${product}: ${[price]}`);
    }

    Object.entries(catalog).forEach(([letter, list]) => {
        console.log(letter);
        list.forEach(element => console.log(`  ${element}`));
    });
}

// store([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);
store([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);