function phoneNum(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let matchResult = pattern.exec(input);
    let result = [];
    
    while (matchResult != null) {
        result.push(matchResult[0]);

        matchResult = pattern.exec(input);
    }
    
    console.log(result.join(', '));
}

phoneNum('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222');