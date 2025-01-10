function nameMatch(input) {
    let names = input.split(', ');
    let pattern = /^[A-Z][a-z]{1,}( )[A-Z][a-z]{1,}$/gm;
    let result = [];

    // for (let string of names) {
    //     let matchResult = string.match(pattern);
    //     if (matchResult !== null) {
    //         result.push(matchResult[0]);
    //     }
    // }

    // console.log(result.join(' '));

    console.log(input.match(pattern));
    console.log(pattern.exec(input));
}

nameMatch('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');