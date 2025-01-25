function showText() {
    const readMoreElement = document.querySelector('#more');
    const textToExpand = document.querySelector('span#text');
    textToExpand.style.display = 'inline';
    readMoreElement.style.display = 'none';
}