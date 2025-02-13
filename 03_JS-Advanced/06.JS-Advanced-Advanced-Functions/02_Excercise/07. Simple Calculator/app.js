function calculator() {
    let inputValue1Selector = '';
    let inputValue2Selector = '';
    let resultValueSelector = '';

    function init(selector1, selector2, resultSelector) {
        inputValue1Selector = selector1;
        inputValue2Selector = selector2;
        resultValueSelector = resultSelector;
    }

    function add() {
        inputValue1 = document.querySelector(`${inputValue1Selector}`).value;
        inputValue2 = document.querySelector(`${inputValue2Selector}`).value;
        resultValue = document.querySelector(`${resultValueSelector}`);
        resultValue.value = Number(inputValue1) + Number(inputValue2);
    }

    function subtract() {
        inputValue1 = document.querySelector(`${inputValue1Selector}`).value;
        inputValue2 = document.querySelector(`${inputValue2Selector}`).value;
        resultValue = document.querySelector(`${resultValueSelector}`);
        resultValue.value = Number(inputValue1) - Number(inputValue2);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');