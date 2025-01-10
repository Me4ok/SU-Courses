function pass(input) {
    let enteredPass = input[0];
    let pass = 's3cr3t!P@ssw0rd';
    
    if (enteredPass == pass) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

pass(["qwerty"]);
pass(["s3cr3t!P@ssw0rd"]);
pass(["s3cr3t!p@ss"]);
pass(["s3cr3t!P@ssw0rd"]);