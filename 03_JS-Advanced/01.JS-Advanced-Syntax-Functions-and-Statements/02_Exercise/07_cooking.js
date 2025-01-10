function cooking(...input) {
    let result;

    let commands = {
        chop: (input) => {
            result = input / 2;
            console.log(result);
            return result;
        },
        dice: (input) => {
            result = Math.sqrt(input);
            console.log(result);
            return result;
        },
        spice: (input) => {
            result = input + 1;
            console.log(result);            
            return result;
        },
        bake: (input) => {
            result = input * 3;
            console.log(result);
            return result;
        },
        fillet: (input) => {
            result = input * 0.8;
            console.log(result);
            return result;
        }
    }

    let num = Number(input.shift());

    for (let command of input) {
        num = commands[command](num);
    }
}

// cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');