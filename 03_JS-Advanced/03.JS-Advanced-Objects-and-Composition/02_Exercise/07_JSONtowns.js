function JSONTowns(input) {
    let cities = [];
    const headers = splitter(input.shift());
    
    function splitter(input) {
        return input
        .split('|')
        .filter(el => el.length > 0) // as splitter "|" is in the start and end of each row, splitting will end up the result array with an empty elements in the start and end, thus removing those
        .map(el => el.trim()); // when splitting, there might be spaces between elements, e.g. "| Town | Latitude | Longitude |", thus removing spaces
    }
    
    for (let row of input) {
        let tableElements = splitter(row);
        let [city, latitude, longitude] = tableElements;
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        cities.push({
            'Town': city,
            'Latitude': Number(latitude), // parsing to Numbe as it should be number, but it is a string because of .toString(2) above
            'Longitude': Number(longitude) // parsing to Numbe as it should be number, but it is a string because of .toString(2) above
        });

    }

    console.log(JSON.stringify(cities));
}

JSONTowns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
JSONTowns([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);