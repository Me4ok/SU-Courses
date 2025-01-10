function trip(input) {
    let i = 0;
    let value = input[i]; i++;
    let saved = 0;
    let travelled = false;

    while (value !== 'End') {
        let destination = value;
        let cost = Number(input[i]); i++;

        while (!isNaN(Number(input[i]))) {
            saved += Number(input[i]); i++;

            if (saved >= cost && travelled == false) {
                console.log(`Going to ${destination}!`);
                travelled = true;
            }
        }

        travelled = false;
        saved = 0;
        value = input[i]; i++;
    }
}

trip(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
// trip(["France", "2000", "300", "300", "200", "400", "90", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);