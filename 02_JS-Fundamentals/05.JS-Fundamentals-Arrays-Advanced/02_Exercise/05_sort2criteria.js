function sort(input) {
    console.log(
        input
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => a.length - b.length)
            .join('\n')
    );
}

sort(['alpha', 'beta', 'gamma']);
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);