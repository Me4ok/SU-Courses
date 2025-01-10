function occurences(sentence, word) {
    // sentence = ` ${sentence} `; // to catch as well if the searched word is in the beginning or end of the sentence
    let counter = 0;
    sentence.split(' ').forEach(token => {
        if (token == word) {
            counter++;
        }
    });

    console.log(counter);
}

occurences('is This is a word and it also is a sentence ', 'is');
console.log('=========');
occurences('softuni is great place for learning new programming languages', 'softuni');