function newHouse(flowerKind, flowersQty, budget) {
    /*
    "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    Роза	Далия	Лале	Нарцис	Гладиола
    5	    3.80	2.80	3	    2.50

    • Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
    • Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
    • Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
    • Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
    • Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
    */

    let spent = 0;

    if (flowerKind == 'Roses') {
        if (flowersQty <= 80) {
            spent = flowersQty * 5;
        } else {
            spent = (flowersQty * 5) * 0.9;
        }
    } else if (flowerKind == 'Dahlias') {
        if (flowersQty <= 90) {
            spent = flowersQty * 3.8;
        } else {
            spent = (flowersQty * 3.8) * 0.85;
        }
    } else if (flowerKind == 'Tulips') {
        if (flowersQty <= 80) {
            spent = flowersQty * 2.8;
        } else {
            spent = (flowersQty * 2.8) * 0.85;
        }
    } else if (flowerKind == 'Narcissus') {
        if (flowersQty < 120) {
            spent = (flowersQty * 3) * 1.15;
        } else {
            spent = flowersQty * 3;
        }
    } else if (flowerKind == 'Gladiolus') {
        if (flowersQty < 80) {
            spent = (flowersQty * 2.5) * 1.2;
        } else {
            spent = flowersQty * 2.5;
        }
    }

    let diff = budget - spent;

    if (diff >= 0) {
        console.log(`Hey, you have a great garden with ${flowersQty} ${flowerKind} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`);
    }
}

newHouse("Roses", 55, 250);
newHouse("Tulips", 88, 260);