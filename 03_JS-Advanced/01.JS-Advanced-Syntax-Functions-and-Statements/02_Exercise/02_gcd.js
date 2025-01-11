function gcd(num1, num2) {
    let result = 0;
    const minNum = Math.min(num1, num2);

    for (let i = 1; i <= minNum; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            result = i;
        }
    }

    console.log(result);
}

gcd(15, 5);
gcd(2154, 458);