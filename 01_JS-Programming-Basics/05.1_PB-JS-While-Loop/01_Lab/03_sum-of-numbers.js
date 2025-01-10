function sum(input) {
    let num = Number(input[0]);
    let interimSum = 0;
    let i = 1;

    while (num > interimSum) {
        interimSum += Number(input[i]);
        i++;
    }

    console.log(interimSum);
}

sum(["100", "10", "20", "30", "40"]);
sum(["20", "1", "2", "3", "4", "5", "6"]);