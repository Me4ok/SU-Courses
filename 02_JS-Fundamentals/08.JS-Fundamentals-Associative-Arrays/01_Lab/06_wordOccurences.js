function word(input) {
    /*
    // Object way
    let counter = {};

    for (let word of input) {
        if (!counter.hasOwnProperty(word)) {
            counter[word] = 1;
        } else {
            counter[word] += 1;
        }
    }

    Object.entries(counter)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => console.log(`${word} -> ${count} times`));
    */

    // Map way
    let counter = new Map();

    for (let word of input) {
        if (!counter.has(word)) {
            counter.set(word, 1);
        } else {
            // let currentCount = counter.get(word);
            counter.set(word, counter.get(word) + 1);
        }
    }

    Array.from(counter) // being Map obj, stating 'counter' equals to 'counter.entries()'
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => console.log(`${word} -> ${count} times`));
}

word(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('---');
word(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]); 