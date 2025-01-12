function diagonals(input) {
    let firstDiagSum = 0;
    let secondDiagSum = 0;

    for (let i = 0; i < input.length; i++) {
        const firstElement = input[i][i];
        const secondElement = input[i][input.length - 1 - i];
        firstDiagSum += firstElement;
        secondDiagSum += secondElement;
    }

    console.log(firstDiagSum + ' ' + secondDiagSum);
}

// diagonals([
//     [20, 40],
//     [10, 60]
// ]);
diagonals([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);

// 00, 11, 22
// 0l-1, 1l-1-1, 2l-1-2