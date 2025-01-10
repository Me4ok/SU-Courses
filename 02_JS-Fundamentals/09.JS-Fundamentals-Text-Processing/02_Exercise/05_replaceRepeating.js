function replace(input) {
    let split = input.split('');
    let result = [];
    
    for (let symbol of split) {
        let lastElement = result[result.length - 1];
        if (lastElement != symbol) {
            result.push(symbol);
        }
    }

    console.log(result.join(''));
}

replace('aaaaabbbbbcdddeeeedssaa');
replace('qqqwerqwecccwd');