function palindromeChecker(input) {
    for (let number of input) {
        /*
        // Option 1
        let reversedNumber = Number(
            number
                .toString()
                .split('')
                .reverse()
                .join('')
        );

        number == reversedNumber ? console.log('true') : console.log('false');        
        */

        // Option 2
        let string = number.toString();
        let reversedString = '';

        for (let i = string.length - 1; i >= 0; i--) {
            reversedString += string[i];
        }

        console.log(string);
        string == reversedString ? console.log('true') : console.log('false');
    }
}

palindromeChecker([123, 323, 421, 121]);
console.log('- - -');
palindromeChecker([32, 2, 232, 1010]);