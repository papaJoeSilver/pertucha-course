'use strict';

// const box = document.getElementById('box');

// /* console.log(box); */

// const btns = document.getElementsByTagName('button')
// /* const btns = document.getElementsByTagName('button')[1] */

// console.log(btns[1]);

/* const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted); */

var arr = [5, 88, 12, 19, 22];
//Функция "sort();" не делает того, чего ожидается. Нашел вот такое решение:

function compareNum(a, b) {
  return a - b;
}

arr.sort(compareNum);
console.log(arr.sort);