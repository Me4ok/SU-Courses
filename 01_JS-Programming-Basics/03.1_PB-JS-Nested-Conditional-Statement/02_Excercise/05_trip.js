function trip(budget, season) {
    let spent = 0;
    let where = '';
    let accomodation = '';

    if (budget <= 100) {
        where = 'Bulgaria';
        switch (season) {
            case 'summer': spent = budget * 0.3; break;
            case 'winter': spent = budget * 0.7; break;
        }
    } else if (budget <= 1000) {
        where = 'Balkans';
        switch (season) {
            case 'summer': spent = budget * 0.4; break;
            case 'winter': spent = budget * 0.8; break;
        }
    } else {
        where = 'Europe';
        spent = budget * 0.9;
    }

    if (season == 'summer' && where != 'Europe') {
        accomodation = 'Camp';
    } else if (season == 'winter' || where == 'Europe') {
        accomodation = 'Hotel';
    }

    console.log(`Somewhere in ${where}\n${accomodation} - ${spent.toFixed(2)}`);
}

trip(50, "summer");
console.log(' - - - ');
trip(75, "winter");
console.log(' - - - ');
trip(312, "summer");
console.log(' - - - ');
trip(678.53, "winter");
console.log(' - - - ');
trip(1500, "summer");