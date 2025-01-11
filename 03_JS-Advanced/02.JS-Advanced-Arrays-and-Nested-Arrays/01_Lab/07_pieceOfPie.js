function pie(pies, firstPie, lastPie) {
    const indexOfFirstPie = pies.indexOf(firstPie);
    const indexOfLastPie = pies.indexOf(lastPie);
    if (indexOfFirstPie < 0 || indexOfLastPie < 0) {
        return;
    }

    let result = pies.slice(indexOfFirstPie, indexOfLastPie + 1);

    return result;
}

console.log(pie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'
],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
console.log(pie([
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'
],
    'Pot Pie',
    'Smoked Fish Pie'));