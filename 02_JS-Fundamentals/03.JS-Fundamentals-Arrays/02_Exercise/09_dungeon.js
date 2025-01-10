function dungeon(arr) {
    let health = 100;
    let coins = 0;
    let roomReached = 0;
    let isSuccess = true;

    let rooms = arr[0].split('|');

    for (let room of rooms) {
        const [param1, param2] = room.split(' ');

        switch (param1) {
            case 'potion': {
                let potionQty = Number(param2);
                health += potionQty;
                roomReached++;

                if (health > 100) {
                    potionQty -= health - 100;
                    health = 100;
                };

                console.log(`You healed for ${potionQty} hp.`);
                console.log(`Current health: ${health} hp.`);
            };
                break;
            case 'chest': {
                const coinstAmount = Number(param2);
                coins += coinstAmount;
                roomReached++;
                console.log(`You found ${coinstAmount} coins.`);
            };
                break;
            default: {
                const monsterName = param1;
                const monsterAttack = Number(param2);
                health -= monsterAttack;
                roomReached++;

                if (health > 0) {
                    console.log(`You slayed ${monsterName}.`);
                } else {
                    isSuccess = false;
                    console.log(`You died! Killed by ${monsterName}`);
                    console.log(`Best room: ${roomReached}`);
                }
            };
                break;
        }

        if (!isSuccess) {
            break;
        }
    }

    if (isSuccess) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);