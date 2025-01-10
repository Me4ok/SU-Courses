function date(m, y) {
    let date = new Date(y, m, 0).getDate();
    console.log(date);
}

date(3, 2012);
date(2, 2021);