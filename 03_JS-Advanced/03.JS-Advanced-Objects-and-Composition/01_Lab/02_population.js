function town(input) {
    let cities = {}; 

    for (let info of input) {
        let [cityName, population] = info.split(' <-> ');
        population = Number(population);

        if (!cities.hasOwnProperty(cityName)) {
            cities[cityName] = 0;
        }

        cities[cityName] += population;
    }

    for (let [city, population] of Object.entries(cities)) {
        console.log(`${city} : ${population}`);
    }
}

town([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
town([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);