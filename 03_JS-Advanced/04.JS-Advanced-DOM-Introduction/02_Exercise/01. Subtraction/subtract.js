function subtract() {
    const firstNumElement = document.querySelector('#firstNumber');
    const secondNumElement = document.querySelector('#secondNumber');
    const resultFldElement = document.querySelector('#result');

    const result = Number(firstNumElement.value) - Number(secondNumElement.value);
    
    resultFldElement.append(result);
}