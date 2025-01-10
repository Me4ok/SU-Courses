function catalogue(input) {
    let catalogue = {};

    for (let line of input) {
        let [name, price] = line.split(' : ');
        catalogue[name] = +price;
    }

    let catalogueSorted = {};
    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(productName => {
            catalogueSorted[productName] = catalogue[productName];
        });

    // itterate from A to Z to form end catalogue sections for print
    const startIndex = 'A'.charCodeAt();
    const endIndex = 'Z'.charCodeAt();

    for (let i = startIndex; i <= endIndex; i++) {
        const leadingLetter = String.fromCharCode(i);
        const products = Object.keys(catalogueSorted);

        let result = null;

        products.forEach(product => {
            // check if first letter of the product name, matches catalogue section
            if (product[0] == leadingLetter) {
                if (result != null) {
                    // if already added something, add just the new row with product info
                    result += `\n  ${product}: ${catalogueSorted[product]}`;
                } else {
                    // if nothing added so far, add leading letter and the product on the following line
                    result = leadingLetter;
                    result += `\n  ${product}: ${catalogueSorted[product]}`;
                }
            }
        });

        // print if catalogue section for the specific letter is not null
        result ? console.log(result) : result;
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
// ]);