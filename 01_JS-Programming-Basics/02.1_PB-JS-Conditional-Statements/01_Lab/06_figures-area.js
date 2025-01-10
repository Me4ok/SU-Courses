function calc(input) {
    let figure = input[0];
    let area = 0;

    switch (figure) {
        case 'square': {
            let side = +input[1];
            area = side * side;
        };
            break;
        case 'rectangle': {
            let sideA = +input[1];
            let sideB = +input[2];
            area = sideA * sideB;
        };
            break;
        case 'circle': {
            let radius = +input[1];
            area = Math.PI * Math.pow(radius, 2);
        };
            break;
        case 'triangle': {
            let sideA = +input[1];
            let sideB = +input[2];
            area = (sideA * sideB) / 2;
        };
            break;
    }

    console.log(area.toFixed(3));
}

calc(["square", "5"]);
calc(["rectangle", "7", "2.5"]);
calc(["circle", "6"]);
calc(["triangle", "4.5", "20"]);