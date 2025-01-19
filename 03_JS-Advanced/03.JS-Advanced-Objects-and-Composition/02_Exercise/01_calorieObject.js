function calorieInfo(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let product = input[i];
        let calories = input[i + 1];

        result[product] = Number(calories);
    }

    console.log(result);
}

calorieInfo(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieInfo(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);