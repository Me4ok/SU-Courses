function cards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (faces.includes(face.toUpperCase()) == false) {
        throw new Error;
    }

    return {
        faces,
        suits,
        toString() {
            return face.toUpperCase() + this.suits[suit];
        }
    }
}

let result = cards('A', 'S');
console.log(result.toString());
result = cards('10', 'H');
console.log(result.toString());
result = cards('1', 'C');
console.log(result.toString());