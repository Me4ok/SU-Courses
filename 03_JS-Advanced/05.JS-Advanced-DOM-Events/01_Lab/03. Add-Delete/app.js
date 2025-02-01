function addItem() {
    // take ul element
    const ulEl = document.querySelector('ul#items');
    // take input element
    const inputString = document.querySelector('input#newItemText');

    // create new li element
    let newLi = document.createElement('li');
    // - add textContent of new li element
    newLi.textContent = inputString.value;

    // create delete link
    let deleteLink = document.createElement('a');
    // - add event listener to the link
    deleteLink.addEventListener('click', removeElement);
    // - add href="#" attribute
    deleteLink.setAttribute('href', '#');
    // - add text to the link
    deleteLink.textContent = '[Delete]';
    // - add the link to the new li element
    newLi.appendChild(deleteLink);

    // append new li element to the ul
    ulEl.appendChild(newLi);

    function removeElement(e) {
        // e.currentTarget.parentNode.remove();
        e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
    }

    // null the input
    inputString.value = '';
}