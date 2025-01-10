function inventory(input) {
    let heroes = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        let heroe = {
            name,
            level: +level // parse to number
        }
        
        if (items) {
            heroe.items = items.split(', ');
        }

        heroes.push(heroe);
    }

    heroes.sort((heroeA, heroeB) => heroeA.level - heroeB.level);
    console.log(heroes);
    
    heroes.forEach(heroe => {
        console.log(`Hero: ${heroe.name}`);
        console.log(`level => ${heroe.level}`);
        // check if items property exists and if yes print
        if (heroe.items) {
            let heroeItems = heroe.items;
            heroeItems.sort((a, b) => a.localeCompare(b));
            console.log(`items => ${heroeItems.join(', ')}`);
        }
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]);