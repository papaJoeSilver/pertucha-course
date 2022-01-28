'use strict';

//const numberOfFilms = +prompt('Skolko filmov ti uje posmotrel, parenek?', '')

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Skolko filmov ti uje posmotrel, parenek?', '')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Skolko filmov ti uje posmotrel, parenek?', '')
    }
}
// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB (privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Lemur-mur-mur');
            i--;
        } 
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Error, suka');
    }
}
// detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр по номером ${i}`);
        // personalMovieDB.genres[i-1] = genre;
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр по номером ${i}`);
    }
}
writeYourGenres();