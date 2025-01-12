function equals(input) {
    let eqSum = 0;

    // itterate all input elements(rows)
    for (let i = 0; i < input.length; i++) {
        const currentRow = input[i];
        // itterate each row element
        for (let j = 0; j < currentRow.length; j++) {
            // - compare if current row element, equals the value of next row element
            const currentRowEl = currentRow[j];
            
            // check if current element === next element on the same row, skipping last element of the row, as there will be no next element
            if (j < currentRow.length - 1) {
                const currentRowNextEl = currentRow[j + 1];
                if (currentRowEl === currentRowNextEl) {
                    eqSum++;
                }
            }
            
            // skip initiating nextRow, when last row(last input element) is reached
            if (i < input.length - 1) {
                const nextRow = input[i + 1];
                const nextRowEl = nextRow[j];
                if (currentRowEl === nextRowEl) {
                    eqSum++;
                }
            }
        }
    }

    console.log(eqSum);
}

// equals([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]);
// equals([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]);
equals([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]);