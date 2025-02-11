// function add(a) {
//     let sum = 0;
//     sum += a;

//     function calc(b) {
//         sum += b;
//         return calc;
//     }

//     calc.toString = () => sum;
//     return calc;
// }

// console.log(add(1));
// console.log(add(1)(6)(-3));

function one(input) {
    let result = 0;
    result += input;

    function two(param) {
        result += param;
        return two;
    }

    two.toString = () => result;
    return two;
}

// console.log(one(1));
console.log(one(1)(6)(-3).toString());