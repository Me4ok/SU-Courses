function convertToObj(objAsString) {
    let obj = JSON.parse(objAsString);
    let keys = Object.entries(obj);

    for (let [key, value] of keys) {
        console.log(`${key}: ${value}`);
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');