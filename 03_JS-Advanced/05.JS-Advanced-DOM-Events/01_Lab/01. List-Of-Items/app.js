function addItem() {
    const liItems = document.querySelector('ul#items');
    const inputItem = document.querySelector('#newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = inputItem.value;
    liItems.appendChild(newLi);
    inputItem.value = '';
}