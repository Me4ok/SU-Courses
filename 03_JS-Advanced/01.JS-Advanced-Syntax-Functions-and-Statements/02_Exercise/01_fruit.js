function fruitPrice(fruitName, weightGr, priceperKg) {
    const pricePerGr = priceperKg / 1000;
    const totalPrice = weightGr * pricePerGr;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weightGr / 1000).toFixed(2)} kilograms ${fruitName}.`);
}

fruitPrice('orange', 2500, 1.80);
fruitPrice('apple', 1563, 2.35);