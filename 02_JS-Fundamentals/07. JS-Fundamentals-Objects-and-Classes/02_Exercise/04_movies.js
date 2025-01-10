function movies(input) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let moviesList = [];

    for (let combo of input) {
        if (combo.includes('addMovie')) {
            const [emptyString, movieName] = combo.split('addMovie ');
            let newMovie = new Movie(movieName);
            moviesList.push(newMovie);
        } else if (combo.includes('directedBy')) {
            const [movieName, directorName] = combo.split(' directedBy ');

            for (let movieInfo of moviesList) {
                if (movieInfo.name == movieName) {
                    movieInfo.director = directorName;
                }
            }
        } else if (combo.includes('onDate')) {
            const [movieName, dateString] = combo.split(' onDate ');
            for (let movieInfo of moviesList) {
                if (movieInfo.name == movieName) {
                    movieInfo.date = dateString;
                }
            }
        }
    }

    for (let movieInfo of moviesList) {
        // Mine initial - movieInfo.name != undefined && movieInfo.director !== undefined && movieInfo.date !== undefined
        // if statement below is from Ivos' resolution
        if (movieInfo.name && movieInfo.director && movieInfo.date) {
            console.log(movieInfo);
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
console.log('---');
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);