function previousDay(y, m, d) {
    const date = new Date(y, m - 1, d, 3, 0, 0); // 3 -> hours, to compensate for the offset of UTC
    // console.log(date);
    date.setDate(date.getDate() - 1); // subtracting 1 day from the full date, but not from the date day only: e.g. from 2015, 03 March, instead of "03"
    // console.log(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() returns zero based index of the mongth, e.g. March -> 02, October -> 09. Add + 1 for correct representation
    let day = date.getDate();

    console.log(year + '-' + month + '-' + day);
}

previousDay(2016, 3, 1);
console.log('---');
previousDay(2015, 5, 10);