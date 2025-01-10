function boat(budget, season, fishermans) {
    /*
    "Spring", "Summer", "Autumn", "Winter"

    • Цената за наем на кораба през пролетта е  3000 лв.
    • Цената за наем на кораба през лятото и есента е  4200 лв.
    • Цената за наем на кораба през зимата е  2600 лв.
    - - -
    • Ако групата е до 6 човека включително  –  отстъпка от 10%.
    • Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
    • Ако групата е от 12 нагоре  –  отстъпка от 25%.
    - - -
    Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
    */
    let rent = 0;

    if (season == 'Spring') {
        rent = 3000;
    } else if (season == 'Summer' || season == 'Autumn') {
        rent = 4200;
    } else if (season == 'Winter') {
        rent = 2600;
    }

    if (fishermans <= 6) {
        rent *= 0.9;
    } else if (fishermans <= 11) {
        rent *= 0.85;
    } else {
        rent *= 0.75;
    }

    if ((fishermans % 2 == 0) && season != 'Autumn') {
        rent *= 0.95;
    }

    let diff = budget - rent;

    if (diff >= 0) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    }
}

boat(3000, "Summer", 11);
boat(3780, "Autumn", 6);