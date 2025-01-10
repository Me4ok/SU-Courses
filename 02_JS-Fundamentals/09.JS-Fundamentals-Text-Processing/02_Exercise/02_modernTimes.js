function modernTimes(input) {
    // split input sente to an array of tokens
    let split = input.split(' ');
    let special = [];

    // check if symbol is a digit
    function checkIfDigit(token) {
        if (token.charCodeAt() >= 48 && token.charCodeAt() <= 57) {
            return true;
        } else {
            return false;
        }
    }

    // check each token if special
    for (let token of split)  {
        // exclude '#' only by checking length
        if (token.startsWith('#') && token.length > 1) {
            let isSpecial = true;

            // check each symbol of the token if number. Could use checkIfDigit() or isNaN()
            let splitToken = token.split('');
            for (let symbol of splitToken) {
                if (checkIfDigit(symbol)) {
                    isSpecial = false;
                    break;
                }
            };

            if (isSpecial) {
                let tokenWithoutHastag = token.substring(1); // remove starting '#' from the word
                special.push(tokenWithoutHastag);
            }
        }
    }

    console.log(special);
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia #socialMedia123 #test456 #789');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');