function ladybug(input) {
    // {ladybug index} {direction} {fly length}

    let ladyBugsArrCommands = input;
    const fieldSize = Number(ladyBugsArrCommands.shift());
    const ladyBugsPositionsArr = ladyBugsArrCommands.shift().split(' ').map(el => Number(el));
    
    let field = []; // alternative, instead of creating an empty array and loop till filling => field = (new Array(fieldSize)).fill(0) - Viktor Kostadinov;
    // create empty field
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    // place ladybugs on initial positions
    for (let bugPlace of ladyBugsPositionsArr) {
        field[bugPlace] = 1;
    }

    // loop over all commands
    for (let commands of ladyBugsArrCommands) {
        let [ladyBugIndex, direction, step] = commands.split(' ');
        ladyBugIndex = Number(ladyBugIndex);
        step = Number(step);
        // check if ladybug index is valid
        if (ladyBugIndex >= 0 && ladyBugIndex < field.length) { // insted, might use if (ladyBugIndex != undefined)
            // check if ladybug available on a given index and if yes, take it and try to fly to another position
            if (field[ladyBugIndex] == 1) {
                // ladybug flew of the place and it is free now
                field[ladyBugIndex] = 0;

                switch (direction) {
                    case 'left': {
                        for (let i = ladyBugIndex - step; i >= 0; i -= step) {
                            // check if no ladybug on the index and place the flyingladybug there if no
                            if (field[i] == 0) {
                                field[i] = 1;
                                break;
                            }
                        }
                    };
                        break;
                    case 'right': {
                        for (let i = ladyBugIndex + step; i < field.length; i += step) {
                            // check if no ladybug on the index and place the flyingladybug there if no
                            if (field[i] == 0) {
                                field[i] = 1;
                                break;
                            }
                        }
                    };
                        break;
                }
            }
        }
    }

    console.log(field.join(' '));
}

ladybug([3, '0 1', '0 right 1', '2 right 1']);
// ladybug([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybug([5, '3', '3 left 2', '1 left -2']);