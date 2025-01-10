function cutAndReverse(input) {
    const firstPart = input.substring(0, input.length / 2);
    const secondPart = input.substring(input.length / 2);
    const firstReversed = firstPart
        .split('')
        .reverse()
        .join('');
    const secondReversed = secondPart
        .split('')
        .reverse()
        .join('');

    console.log(firstReversed, secondReversed);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');