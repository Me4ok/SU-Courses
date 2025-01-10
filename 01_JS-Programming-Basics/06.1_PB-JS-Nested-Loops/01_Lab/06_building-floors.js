function building(floors, aprs) {
    let buildingFloorsEnum = '';
    let interimFloorEnum = '';

    for (let f = floors; f >= 1; f--) {
        for (let a = 0; a < aprs; a++) {
            if (f == floors) {
                interimFloorEnum += `L${f}${a} `;
            } else {
                if (f % 2 == 0) {
                    interimFloorEnum += `O${f}${a} `;
                } else {
                    interimFloorEnum += `A${f}${a} `;
                }
            }
        }
        buildingFloorsEnum += `${interimFloorEnum}\n`;
        interimFloorEnum = '';
    }

    console.log(buildingFloorsEnum);
}

building(6, 4);
// building(9, 5);
// building(4, 4);