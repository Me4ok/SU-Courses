function combos(num) {
    let combosCount = 0;

    for (let a = 0; a <= num; a++) {
        for (let b = 0; b <= num; b++) {
            for (let c = 0; c <= num; c++) {
                let result = a + b + c;

                if (result == num) {
                    combosCount++;
                }
            }
        }
    }

    console.log(combosCount);
}

combos(25);
combos(20);
combos(5);