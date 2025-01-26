function toggle() {
    const btnElement = document.querySelector('.button');
    const hiddenPElement = document.querySelector('div#extra');
    
    if (btnElement.textContent == 'More') {
        hiddenPElement.style.display = 'block';
        btnElement.textContent = 'Less';
    } else if (btnElement.textContent = 'Less') {
        hiddenPElement.style.display = 'none';
        btnElement.textContent = 'More';
    }
}