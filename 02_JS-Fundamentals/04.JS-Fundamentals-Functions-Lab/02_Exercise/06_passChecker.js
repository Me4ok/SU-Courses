function passChecker(input) {
    let password = input;
    let lengthReqMet = true;
    let allowedSymbolsOnly = true;
    let haveAtLeastTwoDigits = true;
    let digitsCount = 0;

    if (password.length < 6 && password.length < 10) {
        lengthReqMet = false;
    }

    for (let symbol of password) {
        let symbolASCIIChar = symbol.charCodeAt(0);

        if (symbolASCIIChar >= 48 && symbolASCIIChar <= 57) {
            digitsCount++;
        }

        if (
            !(symbolASCIIChar >= 48 && symbolASCIIChar <= 57) &&
            !(symbolASCIIChar >= 65 && symbolASCIIChar <= 90) &&
            !(symbolASCIIChar >= 97 && symbolASCIIChar <= 122)
        ) {
            allowedSymbolsOnly = false;
        }
    }

    if (digitsCount < 2) {
        haveAtLeastTwoDigits = false;
    }

    if (!lengthReqMet) {
        console.log('Password must be between 6 and 10 characters');
    }
    
    if (!allowedSymbolsOnly) {
        console.log('Password must consist only of letters and digits');
    }
    
    if (!haveAtLeastTwoDigits) {
        console.log('Password must have at least 2 digits');
    }
    
    if (lengthReqMet && allowedSymbolsOnly && haveAtLeastTwoDigits) {
        console.log('Password is valid');
    }
}

passChecker('logIn');
console.log('---');
passChecker('MyPass123');
console.log('---');
passChecker('Pa$s$s');