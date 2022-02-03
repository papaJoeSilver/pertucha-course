// "use strict";

// const category = 'toys';

// console.log(`https://instagram.com/${category}/5`);

// const user ='Chewy';

// alert(`Hoy, mr.${user}`);

// console.log(4 + +'5');
// console.log('4' + ' - zalupa');
// console.log('arr' + ' - zalupa');
// console.log(4 + '5');

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);
// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == '8');
// console.log(2*4 === '8');
// console.log(2*4 === 8);

// const isChecker = false,
//       isClose = false;

// // console.log(isChecker && isClose);
// // console.log(isChecker || isClose);
//  console.log(isChecker || !isClose);

// console.log(2 + 2 * 2 === 8);
// console.log(2 + 2 * 2 != 8);
// console.log(2 + 2 * 2 != '6');
// console.log(2 + 2 * 2 !== '6');

// const numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');
// console.log(numberOfFilms);
// console.log(typeof(numberOfFilms));

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько ты его оцениваешь, паренёк?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько ты его оцениваешь, паренёк?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('Oki-koki');
// } else {
//     console.log('Error, suka');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('4et dohuya');
// } else {
//     console.log('Ok, boss');
// };

// (num === 50) ? console.log('Ok, boss') :  console.log('error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Pizdejh');
//         break;
//     case 100:
//         console.log('Pizdejh');
//         break;
//     case 50:
//         console.log('Bez pezd ti prav, perez');
//         break;
//     default:
//         console.log('Zalupa');
//         break;
// }

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// // for (let i = 1; i < 8; i++) {
// //     console.log(num);
// //     num++;
// // }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// ВСЁ, ЧТО БЫЛО ВЫШЕ - КАКАЯ-ТО НЕ СТРУКТУИРОВАННАЯ ЗАЛУПА

// ----------- ЗАДАНИЕ 1 -----------

// ___ ПУНКТ 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// const numberOfFilms = +prompt('Skolko filmov ti uje posmotrel, parenek?', '')

// ___ ПУНКТ 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// РЕШЕНИЕ
/* const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
}; */

// ___ ПУНКТ 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли

/*РЕШЕНИЕ
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

const aa = prompt('Ваш любимый актер', ''),
      bb = prompt('Как думаете, он тоже пидрилла, как большинство?', ''),
      cc = prompt('Ваш любимый актер', ''),
      dd = prompt('Как думаете, он тоже пидрилла, как большинство?', '');

personalMovieDB.actors[aa] = bb
personalMovieDB.actors[cc] = dd

console.log(personalMovieDB);*/

// ----------- ЗАДАНИЕ 2 -----------
// ___ ПУНКТ 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

/* ___ ПУНКТ 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
 - отменить ответ или ввести название фильма длинее, чем 50 символов. 
 - Если это происходит - возвращаем пользователя к вопросам опять 

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

/* ___ ПУНКТ  3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", 
 - если от 10 до 30 - "Вы классический зритель", 
 - а если больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" 

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Error, suka');
}

console.log(personalMovieDB);
*/

/*
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10
    console.log(num);
}

showFirstMessage('Hello 4epT!'); 
console.log(num);
*/

/*
function calc(a, b) {
    return (a + b);
}
 console.log(calc(4, 3));
 console.log(calc(5, 6));
 console.log(calc(10, 6));
 */

 /*
// ----------------- FUNCTION DECLARATION -----------------

 const anotherNum = ret(); // НА СТРАНИЦЕ СНАЧАЛА ВЫПОЛНЯЮТСЯ ВСЕ ФУНКЦИИ, А ПОТОМ УЖЕ ВЫХОДЯТ ВСЯКИЕ ТАМ КОНСОЛЬКИ, СВИСТУЛЬКИ И ПРОЧЕЕ
 console.log(anotherNum);
 function ret () {
     let num = 50;
     return num;
 }
*/

// ----------------- FUNCTION EXPRESSION -----------------
/*
let logger = function() {
    console.log('MF Hoy');
};
logger(); // СНАЧАЛА ОБЪЯВЛЯЕТСЯ ПЕРЕМЕННАЯ И ТОЛЬКО ПОСЛЕ ЭТОГО ВЫПОЛНЯЮТСЯ ДЕЙСТВИЯ ВНУТРИ САМОЙ ФУНКЦИИ, ЗАПОМНИ ЭТО, Чуи!
*/

// ----------------- ARROW FUNCTION (ЯК - стрелочник) -----------------
/*
// const calc = (a, b) => a + b;
// const calc = (a, b) => {return a + b};
const calc = (a, b) => {
        return a + b;
};
console.log(calc(1, 101));
*/

/*
const str = 'teSt';
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = 'Sofme fruit';
console.log(fruit.indexOf('s'));

const logg = 'Hello Chewy';
console.log(logg.slice(0, 5));
console.log(logg.slice(3));
console.log(logg.slice(-5, -1));
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 3));

const num = 12.5;
console.log(Math.round(num));
6
const test =  '12.2pppx';
console.log(parseInt(test));
console.log(typeof parseInt(test));
console.log(parseFloat(test));
*/

/*
function first() {
    setTimeout (function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();
*/

// function learnJS(lang, callback)


/*
function learnJS(lang, callback) {
    setTimeout (function() {
    console.log(`Я учу: ${lang}`);
    callback();
    }, 1500);

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок, Серега, ёпта!');

*/

/*
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок, Серега, ёпта!');
}

learnJS('JavaScript', done);
*/

// const obj = new Object();

/*
const options = {
    name: 'papa Joe',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

// options.makeTest();

const {border, bg} = options.colors;
console.log(border);
console.log(bg);

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.name;
// console.log(options);
*/

/*
let counter = 0;
for(let key in options) {
    if (typeof(options[key]) === "object") {
         for (let i in options[key]) {
             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
             // counter++  
         }
 } else {
         console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++  
    }
}
console.log(counter);
*/

/*
const arr = [2, 13, 26, 8, 10];
// arr.sort();
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
*/
 
/*
const str = prompt('', '');
const products = str.split(', ');
// console.log(products);
console.log(products.join(' нах, '));
*/

/*
const arr = [2, 3, 6, 8, 10];
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
*/

/*
const arr = [1, 2, 3, 6, 8];
arr[99] = 0;
console.log(arr.length);
console.log(arr);
*/

/*
for (let i = 0; i < arr.length; i++) {
    // console.log(arr);
    console.log(arr[i]);
}

for (let valuev of arr) {
    console.log(valuev);
}
*/

//  arr.pop();
//  arr.push(12);
 
//  console.log(arr);


/*
let a = 5;
    b = a;

b = b + 5;

console.log(b);
console.log(a);
*/

/*
const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);
*/

/* function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);

newNumbers.a = 10; */
// newNumbers.c.x = 10; // x и y в свойстве c являются ссылкой к основному объекту

/*
console.log(newNumbers);
console.log(numbers);
*/


/* const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));


const clone = Object.assign({}, add);

clone.d = 666;
console.log(add);
console.log(clone); */


/* const oldArray = ['a', 'b', 'c',];
const newArray = oldArray.slice();

newArray[1] = 'zalupa';
console.log(newArray);
console.log(oldArray); */

/* const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet); */


/* function log(a, b, c, d) {
    console.log(a, b);
    console.log(b);
    console.log(c);
    console.log(d, c, b, a);
}

const num = [2, 5, 7, 88, 9, 34];
log(...num); */

/* const array = ['a', 'b'];
const newArray = [...array];
 */

/* const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

newObj.one = 'fuck you'
newObj.two = 'pig'
console.log(newObj);
console.log(q); */

/* const soldier = {
    health: 400,
    armor: 120,
    johnSad: function() {
        console.log('Suck my cock');
    }
};

const john = {
    health: 100
};

john.__proto__ = soldier; // старый метод для мамонтов 
Object.setPrototypeOf(john, soldier);

console.log(john);
console.log(soldier);
console.log(john.armor);
john.johnSad(); */


/* const soldier = {
    health: 400,
    armor: 120,
    johnSad: function() {
        console.log('Suck my cock');
    }
};

const john = Object.create(soldier);

john.johnSad(); */