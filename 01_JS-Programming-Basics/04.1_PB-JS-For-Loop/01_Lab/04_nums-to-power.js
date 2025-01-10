function num(num) {
    for (let i = 0; i <= Number(num); i += 2) {
        console.log(Math.pow(2, i));
    }
}

num(4);