function mirrorWords(input) {
    let string = input[0];
    let wordsTuples = [];
    const pattern = /(#|@)[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let matches = string.match(pattern);

    if (matches != null) {
        console.log(`${matches.length} word pairs found!`);

        for (let match of matches) {
            // remove first and last symbol of the word - e.g. # or @
            let substring = match.slice(1, match.length - 1);
            let result;

            // remove the double ##, leaving an 2 elements array with 1st and 2nd word only
            if (substring.includes('#')) {
                result = substring.split('##'); 
            } else {
                result = substring.split('@@');
            }

            // Check for word match - e.g. 2nd word reversed equals to 1st word retular
            const [word1, word2] = result;
            // - reverse 2nd word
            const reversedWord2 = word2.split('').reverse().join('');

            if (word1 == reversedWord2) {
                wordsTuples.push(word1 + ' <=> ' + word2);
            }
        }

        if (wordsTuples.length > 0) {
            console.log('The mirror words are:');
            console.log(wordsTuples.join(', '));
        } else {
            console.log('No mirror words!');
        }
    } else {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    }
}

// mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);