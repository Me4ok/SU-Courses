function towns(input) {
    for (let townInfo of input) {
        let [town, latitude, longitude] = townInfo.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let obj = {
            town,
            latitude,
            longitude
        }
        console.log(obj);
    }
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
towns(['Plovdiv | 136.45 | 812.575']);