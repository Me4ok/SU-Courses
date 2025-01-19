function heroeInventory(input) {
    let heroesList = [];

    for (let row of input) {
        if (row.length > 0) {
            const [name, level, ...items] = row.split(' / ');
            let heroe = {
                name,
                level: Number(level)
            };

            if (items.length > 0) {
                const itemsList = items[0].split(', '); // items array has 1 element, string - having all of the heroe items
                heroe.items = [];
                itemsList.forEach(item => {
                    heroe.items.push(item);
                })
            }

            heroesList.push(heroe);
        }
    }
    
    console.log(JSON.stringify(heroesList));
}

// heroeInventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara',
//     'HesMan / 1',
//     '',
// ]);
// heroeInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
heroeInventory([
    'Begonot / 25 / Apple',
    '',
]);