function addItem() {
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');

    let newOptionEl = document.createElement('option');
    newOptionEl.value = value.value;
    newOptionEl.textContent = text.value;

    const selectMenu = document.querySelector('#menu');
    selectMenu.appendChild(newOptionEl);

    text.value = '';
    value.value = '';
}