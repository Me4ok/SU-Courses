function wordsReplace(input) {
    let paragraph = input[0];
    const words = input[1];

    while (paragraph.includes('_')) {
        let firstMatch = paragraph.indexOf('_');
        let tempStr = '';

        for (let i = firstMatch; i < paragraph.length; i++) {
            if (paragraph[i] == '_') {
                tempStr += '_';
            } else {
                let tempStrLength = tempStr.length;

                // replace first occurence of the X count "_" with word having the same length as the count of '_'
                for (let token of words) {
                    if (token.length == tempStrLength) {
                        let word = words.splice(words.indexOf(token), 1)[0]; // remove the matching word from the array
                        paragraph = paragraph.replace(tempStr, word); // replace '__' with the matching word
                        tempStr = ''; // reset tempStr value
                    }
                };
            }
        }
    }

    console.log(paragraph);
}

// wordsReplace(['Hi ____, how are you _____?', ['today', 'Josh',]]);
wordsReplace([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot giving me a ___.',
    ['pie', 'pow', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);