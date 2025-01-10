function gladiator(input) {
    let inventory = input.shift().split(' ');
    let commands = input.slice();
    const list = {
        buy,
        trash,
        repair,
        upgrade
    }

    for (let combo of commands) {
        const [command, equipment] = combo.split(' ');
        inventory = list[command.toLowerCase()](inventory, equipment);
    }

    function buy(itemsList, item) {
        // add equipment if not in the list at last position
        if (!itemsList.includes(item)) {
            itemsList.push(item);
        }
        return itemsList;
    }
    function trash(itemsList, item) {
        // delete the item if it exists in the items list
        if (itemsList.includes(item)) {
            let indexOfItem = itemsList.indexOf(item);
            itemsList.splice(indexOfItem, 1);
        }
        return itemsList;
    }
    function repair(itemsList, item) {
        // repair the item if it exists in the items list and move it to the last place
        if (itemsList.includes(item)) {
            let indexOfItem = itemsList.indexOf(item);
            let repairedItem = itemsList.splice(indexOfItem, 1); // list with 1 item
            itemsList.push(...repairedItem); // spread operator to expand the "repairedItem" array, having only 1 element
        }
        return itemsList;
    }
    function upgrade(itemsList, items) {
        // if item exists in the items list, upgrade it and add upgraded items after it
        let [item, upgrade] = items.split('-');
        if (itemsList.includes(item)) {
            let indexOfItem = itemsList.indexOf(item);
            let upgradedItem = item + ':' + upgrade;
            itemsList.splice(indexOfItem + 1, 0, upgradedItem);
        }
        return itemsList;
    }

    console.log(inventory.join(' '));
}

gladiator([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);
gladiator([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]);