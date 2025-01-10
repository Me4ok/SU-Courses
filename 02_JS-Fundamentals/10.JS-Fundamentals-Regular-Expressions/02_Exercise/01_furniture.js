function furniture(input) {
    let furnitures = {
        furniture: [],
        totalCost: 0
    };
    let pattern = />>(?<type>[A-Z]\w+)<<(?<price>\d+(?:\.\d+)?)\!(?<quantity>\d+)/g;
    
    for (let row of input) {
        if (row == 'Purchase') {
            break;
        }

        let result = pattern.exec(row);
        
        if (result != null) {
            let furnitureName = result.groups.type;
            let furniturePrice = Number(result.groups.price) * Number(result.groups.quantity);
            furnitures.furniture.push(furnitureName);
            furnitures.totalCost += furniturePrice;
        }
        pattern.lastIndex = 0;
    }

    console.log('Bought furniture:');
    furnitures.furniture.forEach(el => console.log(el));
    console.log(`Total money spend: ${furnitures.totalCost.toFixed(2)}`);
}

furniture([
    '>>TV<<300!5',
    '>>Sofa<<312.23!3',
    '>Invalid<<!5',
    'Purchase'
]);
// furniture([
//     '>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase'
// ]);