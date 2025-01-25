function colorize() {
    const rows = document.querySelectorAll('tbody tr');
    Array.from(rows).map((row, i) => {
        if (i % 2 == 1) {
            row.style.backgroundColor = 'teal';
        }
    });
}