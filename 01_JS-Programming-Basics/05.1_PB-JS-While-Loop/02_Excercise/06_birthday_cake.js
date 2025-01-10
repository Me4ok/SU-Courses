function bDayCake(input) {
    let pieceSzSqCm = 1;
    let i = 0;
    const cakeLCm = Number(input[i]); i++;
    const cakeWCm = Number(input[i]); i++
    let value = input[i]; i++;
    let moreCakePsc = 0;

    let cakeSzSqCm = cakeLCm * cakeWCm;
    let cakePieces = cakeSzSqCm / pieceSzSqCm;

    while (value != 'STOP') {
        let guestPieces = Number(value);

        if (guestPieces > cakePieces) {
            moreCakePsc = guestPieces - cakePieces;
            cakePieces = 0;
        } else {
            cakePieces -= guestPieces;
        }

        if (cakePieces == 0) {
            break;
        }
        
        value = input[i]; i++;
    }

    if (moreCakePsc == 0) {
        console.log(`${cakePieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${moreCakePsc} pieces more.`);
    }
}

bDayCake(["10", "10", "20", "20", "20", "20", "21"]);
// bDayCake(["10", "2", "2", "4", "6", "STOP"]);