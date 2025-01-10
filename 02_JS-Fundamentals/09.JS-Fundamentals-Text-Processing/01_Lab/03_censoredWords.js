function censored(sentence, word) {
    let result = sentence.split(word).join('*'.repeat(word.length));
    console.log(result);
}

censored('A small sentence with some words small', 'small');
censored('Find the hidden word', 'hidden');