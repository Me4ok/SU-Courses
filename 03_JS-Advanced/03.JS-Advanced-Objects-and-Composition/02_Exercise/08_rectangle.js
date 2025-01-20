function rectangle(input1, input2, input3) {
    const width = Number(input1);
    const height = Number(input2);
    let color = input3;
    color = color[0].toUpperCase() + color.substring(1); // Make color with first letter to be capital

    let rectFigure = {
        width,
        height,
        color,
        calcArea: function () {
            return this.height * this.width;
        }
    };

    return rectFigure;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());