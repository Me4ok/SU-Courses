function carWash(commands) {
    let percentageClean = 0;

    function soap(input) {
        return input + 10;
    }

    function water(input) {
        return input * 1.2;
    }

    function vacuumCleaner(input) {
        return input * 1.25;
    }

    function mud(input) {
        return input * 0.9;
    }

    /*
    // Option 2
    const actions = {
        soap,
        water,
        'vacuum cleaner': vacuumCleaner,
        mud
    }
    
    commands.forEach(command => {
        percentageClean = actions[command](percentageClean);
    });
    */

    for (let command of commands) {
        switch (command) {
            case 'soap': {
                percentageClean = soap(percentageClean);
            };
                break;
            case 'water': {
                percentageClean = water(percentageClean);
            };
                break;
            case 'mud': {
                percentageClean = mud(percentageClean);
            };
                break;
            case 'vacuum cleaner': {
                percentageClean = vacuumCleaner(percentageClean);
            };
                break;
        }
    }

    console.log(`The car is ${percentageClean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);