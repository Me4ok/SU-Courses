function reverseInPlace(array) {
    let k = array.length - 1;
    
    for (let i = 0; i < array.length / 2; i++, k--) {
        let frontElement = array[i];
        let backElement = array[k];
        array[i] = backElement;
        array[k] = frontElement;
    }

    console.log(array);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);