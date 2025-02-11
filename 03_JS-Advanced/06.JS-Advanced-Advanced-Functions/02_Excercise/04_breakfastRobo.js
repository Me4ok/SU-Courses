function solution() {
    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipesLibrary = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    function restock(element, qty) {
        storage[element] += qty;
        return 'Success';
    }

    function prepare(recipe, recipeCount) {
        const toCook = recipesLibrary[recipe]; // object with required products - nutrient: qty

        // Check if enough products available in storage
        // - Itterate through each required product and it's quantity
        for (let [nutrient, ingredientQty] of Object.entries(toCook)) {
            const requiredQty = ingredientQty * recipeCount;
            // - If product qty in storage, not enough, print error message
            if (storage[nutrient] < requiredQty) {
                return `Error: not enough ${nutrient} in stock`;
            }
        }

        // If products are enough, above for didn't reach "break", subtract required recipe qty from storage qty
        for (let [nutrient, nutrientQty] of Object.entries(toCook)) {
            const requiredQty = nutrientQty * recipeCount;
            // Subtract qty from the storage
            storage[nutrient] -= requiredQty;
        }
        return 'Success';
    }

    function report() {
        return Object.entries(storage) // return pairs of nutrient & quantity
            .map(([nutrient, qty]) => `${nutrient}=${qty}`) // change each arr element to string in desired to print format
            .join(' ');
    }

    // restock <microelement> <quantity> - increases the stored quantity of the given microelement
    // prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
    // report - returns information about the stored microelements, in the order described below, including zero elements
    const cookCommands = {
        restock,
        prepare,
        report
    }

    function cookMng(input) {
        let [command, ingredientOrRecipe, quantity] = input.split(' ');
        quantity = Number(quantity);
        let result = cookCommands[command](ingredientOrRecipe, quantity);
        return result;
        // let [param1, param2, param3] = input.split(' ');
        // const ingredientRecipeQty = Number(param3);
        // switch (param1) {
        //     case 'restock': {
        //         const ingredient = param2;
        //         storage[ingredient] += ingredientRecipeQty;
        //         return 'Success';
        //     };
        //     case 'prepare': {
        //         const recipe = param2;
        //         const recipeToCook = recipesLibrary[recipe];

        //         // check if all ingredients are available in the storage
        //         for (let [nutrient, nutrQty] of Object.entries(recipeToCook)) {
        //             if (storage[nutrient] < nutrQty) {
        //                 // - if no, change boolean to false and return error message;
        //                 allIngredAvailable = false;
        //                 return `Error: not enough ${nutrient} in stock`;
        //             }
        //         }

        //         // if all ingredients are available, subtract each ingred qty from the storage
        //         for (let [nutrient, nutrQty] of Object.entries(recipeToCook)) {
        //             storage[nutrient] -= nutrQty;
        //         }

        //         return 'Success';
        //     };
        //         break;
        //     case 'report': {
        //         for (nutrient in storage) {
        //             return Object.entries(storage).map(([nutrient, quantity]) => `${nutrient}=${quantity}`).join(' ');
        //         }
        //     };
        //         break;
        // }
    }

    return cookMng;
}

let manager = solution();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare apple 1')); // Success
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare burger 1')); // Success
console.log(manager('report')); // protein=0 carbohydrate=4 fat=3 flavour=55

// console.log(manager('prepare turkey 1')); // Error: not enough protein in stock
// console.log(manager('restock protein 10')); // Success
// console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
// console.log(manager('restock carbohydrate 10')); // Success
// console.log(manager('prepare turkey 1')); // Error: not enough fat in stock
// console.log(manager('restock fat 10')); // Success
// console.log(manager('prepare turkey 1')); // Error: not enough flavour in stock
// console.log(manager('restock flavour 10')); // Success
// console.log(manager('prepare turkey 1')); // Success
// console.log(manager('report')); // protein=0 carbohydrate=0 fat=0 flavour=0