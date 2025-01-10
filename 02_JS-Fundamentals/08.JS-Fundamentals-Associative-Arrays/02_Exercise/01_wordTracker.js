function wordTracker(input) {
    /*
    // Map way
    let list = new Map();
    let wordsToSearch = input.shift().split(' ');

    for (let word of wordsToSearch) {
        list.set(word, 0);
    }

    for (let word of input) {
        if (list.has(word)) {
            const currentCount = list.get(word);
            list.set(word, currentCount + 1);
        }
    }

    Array.from(list.entries())
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => console.log(word, '-', count));
    */

    // Object way
    let list = {};
    let wordsToSearch = input.shift().split(' ');

    for (let word of wordsToSearch) {
        list[word] = 0;
    }

    for (let word of input) {
        if (list.hasOwnProperty(word)) {
            list[word] += 1;
        }
    }

    Object.entries(list)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => console.log(word, '-', count));
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);