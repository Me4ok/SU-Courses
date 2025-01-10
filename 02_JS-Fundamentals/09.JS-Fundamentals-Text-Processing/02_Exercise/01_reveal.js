function reveal(input1, sentence) {
    const words = input1.split(', ');
    let splitSent = sentence.split(' ');

    words.forEach(word => {
        for (let i = 0; i < splitSent.length; i++) {
            if (splitSent[i] == '*'.repeat(word.length)) {
                splitSent[i] = word;
            }
        };
    });

    console.log(splitSent.join(' '));

    // DISCLAIMER: That solution would not work with sentences having ',' or any other symbol concat to the ** in the sentence
}

reveal('great', 'softuni is *****, place for learning new programming languages');
console.log(' = = = ');
reveal('great, learning', 'softuni is ***** place for ******** new programming languages');