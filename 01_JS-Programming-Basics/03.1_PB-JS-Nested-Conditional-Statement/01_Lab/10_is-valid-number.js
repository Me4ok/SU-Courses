function check(number) {
    if (number >= 100 && number <= 200 || number == 0) {
        
    } else {
        console.log('invalid');
    }
}

check(75);
check(150);
check(220);
check(199);
check(-1);
check(100);
check(200);
check(0);