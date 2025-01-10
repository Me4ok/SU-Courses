function space(input) {
    let boxVolCubM = 1;
    let i = 0;
    const apW = Number(input[i]); i++;
    const apL = Number(input[i]); i++;
    const apH = Number(input[i]); i++;
    let apVolCubM = apW * apL * apH;
    let value = input[i]; i++;
    let notEnoughVol = 0;

    while (value != 'Done') {
        let boxesCount = Number(value);
        let boxesVolumeCubM = boxesCount * boxVolCubM;
        
        if (apVolCubM >= boxesVolumeCubM) {
            apVolCubM -= boxesVolumeCubM;
        } else {
            notEnoughVol = boxesVolumeCubM - apVolCubM;
            break;
        }

        value = input[i]; i++;
    }

    if (notEnoughVol == 0) {
        console.log(`${apVolCubM} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${notEnoughVol} Cubic meters more.`);
    }
}

space(["10", "10", "2", "20", "20", "20", "20", "122"]);
// space(["10", "1", "2", "4", "6", "Done"]);