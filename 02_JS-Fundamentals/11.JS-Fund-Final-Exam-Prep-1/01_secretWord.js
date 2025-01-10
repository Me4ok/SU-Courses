function secretWord(input) {
    let concealedMessage = input.shift();

    function InsertSpace(string, index) {
        // "InsertSpace:|:{index}"
        const endIndex = Number(index);
        const firstPart = string.slice(0, endIndex);
        const secondPart = string.slice(endIndex);
        const result = firstPart + ' ' + secondPart;
        console.log(result);
        return result;
    }

    function Reverse(string, toReverse) {
        // "Reverse:|:{substring}"
        const index = string.indexOf(toReverse);

        if (index != -1) {
            const firstPart = string.slice(0, index);
            const secondPart = string.slice(index + toReverse.length);
            const reversedString = toReverse.split('').reverse().join('');
            const result = firstPart + secondPart + reversedString;
            console.log(result);
            return result;
        } else {
            console.log('error');
            return string;
        }
    }

    function ChangeAll(string, word1, word2) {
        // "ChangeAll:|:{substring}:|:{replacement}"
        const result = string.split(word1).join(toReplword2ceWith);
        
        /* // With regex
        const pattern = new RegExp(word1, 'g');
        const result = string.replace(pattern, word2);
        // string.replace - when called with regex pattern, it replaces all matches. Above, we're using "pattern = new RegExp(word1, 'g')" instead of direclty declaring result as "result = string.replace(/word1/g, word2)", because /word1/ will match exactly the string "word1", while we want to have word1 as a dynamic parameter - which is delivered by using new RegExp.
        */
        console.log(result);
        return result;
    }

    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    }

    while (input[0] != 'Reveal') {
        let [command, param1, param2] = input.shift().split(':|:');
        // commands[command] = returns a function
        concealedMessage = commands[command](concealedMessage, param1, param2);
        /*
        // My way. Above solution with nested into dictionary functions is suggested by Viktor Kostadinov
        switch (command) {
            case 'InsertSpace': {
                // "InsertSpace:|:{index}"
                const endIndex = Number(param1);
                const firstPart = concealedMessage.slice(0, endIndex);
                const secondPart = concealedMessage.slice(endIndex);
                concealedMessage = firstPart + ' ' + secondPart;
                console.log(concealedMessage);
            };
                break;
            case 'Reverse': {
                // "Reverse:|:{substring}"
                const string = param1;
                if (concealedMessage.includes(param1)) {
                    const index = concealedMessage.indexOf(param1);
                    const firstPart = concealedMessage.slice(0, index);
                    const secondPart = concealedMessage.slice(index + string.length);
                    const reversedString = string.split('').reverse().join('');
                    concealedMessage = firstPart + secondPart + reversedString;
                    console.log(concealedMessage);
                } else {
                    console.log('error');
                }
            };
                break;
            case 'ChangeAll': {
                // "ChangeAll:|:{substring}:|:{replacement}"
                const toReplace = param1;
                const toReplaceWith = param2;
                concealedMessage = concealedMessage.split(toReplace).join(toReplaceWith);
                console.log(concealedMessage);
            };
                break;
        }
        */
    }

    console.log('You have a new text message: ' + concealedMessage);
}

// secretWord([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l', // heLLodar!gnil
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);
secretWord([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
