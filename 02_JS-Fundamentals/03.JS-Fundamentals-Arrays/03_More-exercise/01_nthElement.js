function nthElement(array) {
    let arrayOfElements = array;
    let arrayL = arrayOfElements.length;
    let step = Number(arrayOfElements[arrayL - 1]);
    let newArray = [];

    for (let i = 0; i < arrayL - 1; i += step) {
        newArray.push(arrayOfElements[i]);
    }

    console.log(newArray.join(' '));
}

nthElement(['5', '20', '31', '4', '20', '2']);
nthElement(['dsa', 'asd', 'test', 'test', '2']);
nthElement(['1', '2', '3', '4', '5', '6']);