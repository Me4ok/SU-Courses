function validityChecker(x1, y1, x2, y2) {
    // {x1, y1} to {0, 0}
    // {x2, y2} to {0, 0}
    // {x1, y1} to {x2, y2}

    // Ivan Popov solution - excercise
    function checkDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    checkDistance(x1, y1, 0, 0);
    checkDistance(x2, y2, 0, 0);
    checkDistance(x1, y1, x2, y2);

    // // Mine solution
    // if (Number.isInteger(checkOne)) {
    //     console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    // } else {
    //     console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    // }

    // if (Number.isInteger(checkTwo)) {
    //     console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    // } else {
    //     console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    // }

    // if (Number.isInteger(checkThree)) {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    // } else {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    // }
}

validityChecker(3, 0, 0, 4);
console.log(' - - -');
validityChecker(2, 1, 1, 1);