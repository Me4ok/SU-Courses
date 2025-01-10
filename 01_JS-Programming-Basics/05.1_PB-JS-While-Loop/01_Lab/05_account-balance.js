function accBalance(input) {
    let balance = 0;
    let i = 0;
    let currentValue = input[i];

    while (currentValue !== 'NoMoreMoney') {
        if (Number(currentValue) < 0) {
            console.log('Invalid operation!');
            break;
        }

        balance += Number(currentValue);
        console.log(`Increase: ${Number(currentValue).toFixed(2)}`);
        i++;
        currentValue = input[i];
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

// accBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accBalance(["120", "45.55", "-150"]);