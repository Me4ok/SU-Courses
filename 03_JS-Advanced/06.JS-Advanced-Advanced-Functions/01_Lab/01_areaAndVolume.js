function solve(area, vol, input) {
    let result = [];
    const figures = JSON.parse(input);

    for (let figure of figures) {
        const resultArea = area.call(figure);
        const resultVol = vol.call(figure);
        result.push({
            area: resultArea,
            volume: resultVol
        });
    }

    return result;
};

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


// solve(area, vol, `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`
// );
solve(area, vol, `[
        {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
        ]`
);