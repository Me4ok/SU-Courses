function convertToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor,
    }
    let objAsString = JSON.stringify(person);

    console.log(objAsString);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');