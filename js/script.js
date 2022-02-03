'use strict';

//const numberOfFilms = +prompt('Skolko filmov ti uje posmotrel, parenek?', '')

/* let numberOfFilms;

function 
start(); */


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => { //function() { - это по-старинке
        personalMovieDB.count = +prompt('Skolko filmov ti uje posmotrel, parenek?', '');
    
        while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
            personalMovieDB = +prompt('Skolko filmov ti uje posmotrel, parenek?', '');
        }
    }
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