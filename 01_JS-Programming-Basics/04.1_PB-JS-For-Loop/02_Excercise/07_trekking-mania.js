function trekking(input) {
    let groupsCount = Number(input[0]);
    let climbersTotalCount = 0;
    let grMusala = 0;
    let grMonblan = 0;
    let grKili = 0;
    let grK2 = 0;
    let grEverest = 0;

    /*
    • Група до 5 човека – изкачват Мусала
    • Група от 6 до 12 човека – изкачват Монблан
    • Група от 13 до 25 човека – изкачват Килиманджаро
    • Група от 26 до 40 човека –  изкачват К2
    • Група от 41 или повече човека – изкачват Еверест
    */

    for (let i = 1; i <= groupsCount; i++) {
        let clibmersGroupCount = Number(input[i]);
        climbersTotalCount += clibmersGroupCount

        if (clibmersGroupCount > 0 && clibmersGroupCount <= 5) {
            grMusala += clibmersGroupCount;
        } else if (clibmersGroupCount <= 12) {
            grMonblan += clibmersGroupCount;
        } else if (clibmersGroupCount <= 25) {
            grKili += clibmersGroupCount;
        } else if (clibmersGroupCount <= 40) {
            grK2 += clibmersGroupCount;
        } else if (clibmersGroupCount > 40) {
            grEverest += clibmersGroupCount;
        }
    }

    console.log(`${(grMusala * 100 / climbersTotalCount).toFixed(2)}%\n${(grMonblan * 100 / climbersTotalCount).toFixed(2)}%\n${(grKili * 100 / climbersTotalCount).toFixed(2)}%\n${(grK2 * 100 / climbersTotalCount).toFixed(2)}%\n${(grEverest * 100 / climbersTotalCount).toFixed(2)}%`);
}

trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);