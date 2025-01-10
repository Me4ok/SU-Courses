function sum(input1, input2, input3) {
    let sec1 = Number(input1);
    let sec2 = Number(input2);
    let sec3 = Number(input3);

    let sumOfSeconds = sec1 + sec2 + sec3;
    let minutes = Math.floor(sumOfSeconds / 60);
    let seconds = sumOfSeconds % 60;
    
    console.log(`${minutes}:${seconds.toString().padStart(2, '0')}`);
}

sum(35, 45, 44);
sum(22, 7, 34);
sum(50, 50, 49);
sum(14, 12, 10);