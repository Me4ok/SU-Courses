function print(input, step) {
    let result = [];

    for (let i = 0; i < input.length; i += step) {
        result.push(input[i]);
    }

    return result;
}

print(['5', '20', '31', '4', '20'], 2);
print(['dsa', 'asd', 'test', 'tset'], 2);
print(['1', '2', '3', '4', '5'], 6);