function reverseRotation(arr) {
    let arrOfElements = arr;
    let rotationsNum = Number(arr.pop());
    let arrL= arrOfElements.length;

    rotationsNum > arrL ? rotationsNum = rotationsNum % arrL : rotationsNum;

    for (let i = 0; i < rotationsNum; i++) {
        let lastElement = arrOfElements.pop();
        arrOfElements.unshift(lastElement);
    }

    console.log(arrOfElements.join(' '));
}

reverseRotation(['1', '2', '3', '4', '2']);
reverseRotation(['Banana', 'Orange', 'Coconut', 'Apple', '15']);