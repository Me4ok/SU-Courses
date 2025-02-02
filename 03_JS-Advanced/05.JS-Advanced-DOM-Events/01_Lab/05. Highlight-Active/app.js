function focused() {
    const inputs = document.querySelectorAll('input[type="text"]');

    Array.from(inputs).forEach(input => {
        input.addEventListener('focus', checkFocus);
        input.addEventListener('blur', checkBlur);
    });

    function checkFocus(e) {
        e.target.parentNode.classList.add('focused');
    }
    function checkBlur(e) {
        e.target.parentNode.classList.remove('focused');
    }
}