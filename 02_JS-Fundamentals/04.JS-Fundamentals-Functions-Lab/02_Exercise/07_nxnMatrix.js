function printMatrix(number) {
    for (let i = 0; i < number; i++) {
        // Option 1
        let result = '';
        for (let z = 0; z < number; z++) {
            result += number;
        }
        console.log(result);
        
        /*
         // Option 2
        console.log(number.toString().repeat(number));
        */
    }
}

printMatrix(3);
printMatrix(5);
printMatrix(7);