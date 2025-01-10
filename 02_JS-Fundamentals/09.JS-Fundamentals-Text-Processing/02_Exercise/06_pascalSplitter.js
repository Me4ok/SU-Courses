function splitter(input) {
    /*
    function capitalLetterChecker(token) {
        if (token.charCodeAt() >= 65 && token.charCodeAt() <= 90) {
            return true;
        } else {
            return false
        }
    }

    let result = [];
    let tempToken = '';

    for (let i = 0; i < input.length; i++) {
        const symbol = input[i];

        if (capitalLetterChecker(symbol) == false) {
            tempToken += symbol;

            // if last element, push the word(tempToken) into the result array
            if (i == input.length - 1) {
                result.push(tempToken);
            }
        } else {
            // first letter is always capital
            if (i == 0) {
                tempToken = symbol;
                continue;
            }

            result.push(tempToken);
            tempToken = symbol; // reset tempToken by assign current capital letter as starting element
        }
    }

    console.log(result.join(', '));    
    */

    // Ivo Dimitrov solution
    text = text.split('');
    let words = [];

    text.forEach(el => {
        if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
            words.push(el);
        } else if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
            words[words.length - 1] += el;
            console.log(words[words.length - 1]);
        }
    })

    console.log(words.join('-'));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');