function calc() {
    // const num1Element = document.getElementById('num1');
    // const num2Element = document.getElementById('num2');
    // const resultElement = document.getElementById('sum');
    
    // resultElement.value = Number(num1Element.value) + Number(num2Element.value);
    const [num1Element, num2Element, sumElement] = document.querySelectorAll('input');
    sumElement.value = Number(num1Element.value) + Number(num2Element.value);
}
