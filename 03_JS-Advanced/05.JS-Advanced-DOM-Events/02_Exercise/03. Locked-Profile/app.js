function lockedProfile() {
    const showHideBtns = document.querySelectorAll('button');
    
    Array.from(showHideBtns).forEach(btn => btn.addEventListener('click', showHide));

    function showHide(e) {
        const unlockRadioBtn = e.currentTarget.parentNode.querySelector('input[value="unlock"]');
        
        if (unlockRadioBtn.checked) {
            const hiddenDiv = e.currentTarget.parentNode.querySelector('div');
            const showHideBtn = e.currentTarget;

            if (showHideBtn.textContent.toLowerCase() == 'show more') {
                hiddenDiv.style.display = 'block';
                showHideBtn.textContent = 'Hide it';
            } else if (showHideBtn.textContent.toLowerCase() == 'hdie it') {
                hiddenDiv.style.display = 'none';
                showHideBtn.textContent = 'Show more';
            }
        }
    }
}