function holiday(input) {
    let i = 0;
    const cost = Number(input[i]); i++;
    let saved = Number(input[i]); i++;
    let action = input[i]; i++;
    let amount = Number(input[i]); i++;
    let spendConsecDays = 0;
    let daysCount = 0;
    let spendTooMuch = false;

    while (i <= input.length) {
        daysCount++;

        switch (action) {
            case 'save': saved += amount; break;
            case 'spend': {
                saved -= amount;
                spendConsecDays++;

                if (saved < 0) {
                    saved = 0;
                }

                if (spendConsecDays == 5) {
                    spendTooMuch = true;
                    break;
                }

            };
                break;
        }

        action = input[i]; i++;
        amount = Number(input[i]); i++;

        // if new action is not spend, null the spendConsecDays counter
        if (action !== 'spend') {
            spendConsecDays = 0;
        }
    }

    if (!spendTooMuch) {
        if (saved >= cost) {
            console.log(`You saved the money for ${daysCount} days.`);
        }
    } else {
        console.log('You can\'t save the money.');
        console.log(daysCount);
    }
}

// holiday(["2000", "1000", "spend", "1200", "save", "2000"]);
// holiday(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
holiday(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);