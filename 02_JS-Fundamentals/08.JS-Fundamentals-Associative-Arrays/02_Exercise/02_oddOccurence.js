function oddOccurence(input) {
    let list = new Map();

    for (let word of input.split(' ')) {
        let equalizer = word.toLowerCase();
        if (!list.has(equalizer)) {
            list.set(equalizer, 0);
        }
        list.set(equalizer, list.get(equalizer) + 1);
    }

    // let result = '';
    // for (let [word, count] of list) {
    //     if (count % 2 != 0) {
    //         result += word + ' ';
    //     }
    // }

    let result = Array.from(list)
        .filter(([word, count]) => count % 2 == 1) // exclude words with even count #
        .map(([word, count]) => word); // change from array of arrays (word, count), to an array of elements - words


    console.log(result.join(' '));
}

oddOccurence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // with Map, it prints the correct ordering, by first appeared(FIFO) => 'c# php 1 5' | with Object, is mixed => '1 5 c# php'
oddOccurence('Cake IS SWEET is Soft CAKE sweet Food');