function solve(age) {
    let is = '';

    if (age >= 0 && age <= 2) {
        is = 'baby';
    } else if (age >= 3 && age <= 13) {
        is = 'child';
    } else if (age >= 14 && age <= 19) {
        is = 'teenager';
    } else if (age >= 20 && age <= 65) {
        is = 'adult';
    } else if (age >= 66) {
        is = 'elder';
    } else if (age < 0) {
        is = 'out of bounds';
    }

    console.log(is);
}

solve(20);
solve(1);
solve(100);
solve(-1);