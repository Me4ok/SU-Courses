function substring(word, startIndex, count) {
    // let result = word.slice(startIndex, startIndex + count);
    let result = word.substring(startIndex, startIndex + count);
    console.log(result);
};

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);