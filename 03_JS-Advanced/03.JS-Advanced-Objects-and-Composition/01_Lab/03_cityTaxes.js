function cityTaxes(name, population, treasury) {
    let cities = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury *= 1 - (percentage / 100);
        }

        // • collectTaxes() - Increase treasury by  population * taxRate
        // • applyGrowth(percentage) - Increase population by given percentage
        // • applyRecession(percentage) - Decrease treasury by given percentage
    };

    return cities;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.applyRecession(10);
console.log(city);
// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);