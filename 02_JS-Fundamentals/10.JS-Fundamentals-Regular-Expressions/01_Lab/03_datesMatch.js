function datesMatch(input) {
    let pattern = /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let match1 = pattern.exec(input);
    let result = [];

    while (match1 != null) {
        const day = match1.groups.day;
        const month = match1.groups.month;
        const year = match1.groups.year;
        result.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
        
        match1 = pattern.exec(input);
    }

    console.log(result.join('\n'));

}

datesMatch('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016');