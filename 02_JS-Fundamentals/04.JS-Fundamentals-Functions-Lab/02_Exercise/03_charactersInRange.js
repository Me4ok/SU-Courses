function charsInRange(firstSymbol, secondSymbol) {
    let index1 = firstSymbol.charCodeAt(0);
    let index2 = secondSymbol.charCodeAt(0);    
    let resultToPrint = '';

    index1 > index2 ? resultToPrint = print(index2, index1) : resultToPrint = print(index1, index2);

    function print(start, end) {
        let result = '';
        for (let i = start + 1; i < end; i++) {
            result += String.fromCharCode(i) + ' ';
        }

        return result;
    }

    console.log(resultToPrint);
}

charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');