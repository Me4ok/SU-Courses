function stringLength(str1, str2, str3) {
    const sumLength = str1.length + str2.length + str3.length;
    console.log(sumLength);
    console.log(Math.floor(sumLength / 3));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');