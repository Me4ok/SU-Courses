function groceries(list) {
    /*
    console.log(list
        .sort((a, b) => a.localeCompare(b))
        .map((el, i) => `${i}.${el}`)
        .join('\n'));
    */
    
    let orderedList = list.sort((a, b) => a.localeCompare(b));
    
    for (let i = 0; i < orderedList.length; i++) {
        console.log(`${i + 1}.${orderedList[i]}`);
    }
}

groceries(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
groceries(['Watermelon', 'Banana', 'Apples']);