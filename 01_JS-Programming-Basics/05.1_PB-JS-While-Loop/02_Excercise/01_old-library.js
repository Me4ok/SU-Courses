function library(input) {
    let favBook = input[0];
    let isFound = false;
    let booksCount = 0;
    let i = 1;
    let nextBook = input[i];

    while (nextBook !== 'No More Books') {        
        if (nextBook === favBook) {
            isFound = true;
            break;
        }
        booksCount++;
        
        i++;
        nextBook = input[i];
    }

    if (isFound) {
        console.log(`You checked ${booksCount} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${booksCount} books.`);
    }
}

// library(["Troy", "Stronger", "Life Style", "Troy"]);
// library(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
library(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);