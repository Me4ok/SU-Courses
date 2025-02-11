function info(...input) {
    const result = {};

    for (let param of input) {
        console.log(typeof param + ': ' + param);

        if (result.hasOwnProperty(typeof param) == false) {
            result[typeof param] = 0;
        }

        result[typeof param]++;
    }

    Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .forEach(entry => console.log(entry[0] + ' = ' + entry[1]));
}

info('cat', 42, function () { console.log('Hello world!'); });