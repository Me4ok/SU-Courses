function language(country) {
    // if (country == 'USA') {
    //     console.log('English');
    // } else if (country == 'England') {
    //     console.log('English');
    // } else if (country == 'Spain') {
    //     console.log('Spanish');
    // } else if (country == 'Argentina') {
    //     console.log('Spanish');
    // } else if (country == 'Mexico') {
    //     console.log('Spanish');
    // } else {
    //     console.log('unknown');
    // }

    switch (country) {
        case 'USA':
            console.log('English');
            break;
        case 'England':
            console.log('English');
            break;
        case 'Spain':
            console.log('Spanish');
            break;
        case 'Argentina':
            console.log('Spanish');
            break;
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}

language('USA');
language('Germany');
language('Spain');
language(5);