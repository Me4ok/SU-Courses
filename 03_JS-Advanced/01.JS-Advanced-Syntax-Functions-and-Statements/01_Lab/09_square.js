function square(num = 5) {
    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num));
    }
}

square(1);
console.log('- - -');
square(3);
console.log('- - -');
square(5);
console.log('- - -');
square(7);
console.log('- - -');