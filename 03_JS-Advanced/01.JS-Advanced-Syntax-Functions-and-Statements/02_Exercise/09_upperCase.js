function upperCase(input) {
    let pattern = /\w+/g;
    let matchResult = input.match(pattern);
    let result = matchResult.map(el => el.toUpperCase());
    
    console.log(result.join(', '));
}

upperCase('Hi, how are you?');
upperCase('hello');