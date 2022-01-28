'use strict';

const arr = [2, 13, 26, 8, 10];
// arr.sort();
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
 
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