function deleteByEmail() {
    const tableRowsEl = document.querySelectorAll('tbody tr');
    const inputEl = document.querySelector('input[type="text"]');
    let output = document.getElementById('result');

    Array.from(tableRowsEl).forEach(row => {
        const currentEmail = row.querySelector('td:nth-of-type(2)').textContent;

        if (currentEmail == inputEl.value) {
            row.remove();
            output.textContent = 'Deleted.';
        } else {
            output.textContent = 'Not found.';
        }
    });

    inputEl.value = '';
}