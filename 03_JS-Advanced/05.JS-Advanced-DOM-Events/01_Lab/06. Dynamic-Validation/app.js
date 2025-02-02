function validate() {
    const inputEl = document.getElementById('email');
    const pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
    
    inputEl.addEventListener('change', (e) => {
        const check = inputEl.value.match(pattern);
        // console.log(check)
        Array.isArray(check) ? inputEl.removeAttribute('class', 'error') : inputEl.setAttribute('class', 'error');
    });
}