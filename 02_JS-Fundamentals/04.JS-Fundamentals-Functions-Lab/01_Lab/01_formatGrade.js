function formatGrade(input) {
    let result = '';

    if (input < 3) {
        result = 'Fail';
    } else if (input < 3.5) {
        result = 'Poor';
    } else if (input < 4.5) {
        result = 'Good';
    } else if (input < 5.5) {
        result = 'Very good';
    } else {
        result = 'Exellent';
    }

    console.log(`${result} (${input})`);
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);