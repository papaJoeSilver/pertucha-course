'use strict';
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


const soldier = {
    health: 400,
    armor: 120,
    johnSad: function() {
        console.log('Suck my cock');
    }
};

const john = Object.create(soldier);

john.johnSad();