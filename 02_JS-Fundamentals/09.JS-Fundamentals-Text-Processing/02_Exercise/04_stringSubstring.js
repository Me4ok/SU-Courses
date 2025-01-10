function substring(word, phrase) {
    let isFound = false;

    if (phrase.toLocaleLowerCase().includes(word.toLocaleLowerCase())) {
        isFound = true;
    }

    isFound ? console.log(word) : console.log(`${word} not found!`);
}

substring('javascript', 'JavaScript is the best programming language');
substring('python', 'JavaScript is the best programming language');