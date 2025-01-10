function solve(value1, value2) {
    let num = Number(value1);
    let precision = Number(value2);

    if (precision > 15) {
        precision = 15;
    }

    console.log(parseFloat(num.toFixed(precision)));
}

solve(3.1415926535897932384626433832795, 2);
solve(10.5, 3);