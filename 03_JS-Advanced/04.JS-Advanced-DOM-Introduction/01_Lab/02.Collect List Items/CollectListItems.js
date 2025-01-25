function extractText() {
    const inputItems = document.querySelectorAll('#items li');
    const outputField = document.querySelector('#result');
    // let result = [];
    // inputItems.forEach(item => {
    //     result.push(item.textContent);
    // });
    // outputField.textContent = result.join('\n');
    outputField.textContent = Array.from(inputItems).map(li => li.textContent).join('\n');
}