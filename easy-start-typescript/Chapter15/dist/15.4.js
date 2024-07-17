"use strict";
// 함수가 호환되는 경우
let add = function (a, b) {
    return a + b;
};
let sum = function (x, y) {
    return x + y;
};
add = sum;
sum = add;
// 함수가 호환되지 않는 경우
let getNumber = function (num) {
    return num;
};
let sum2 = function (x, y) {
    return x + y;
};
// console.log(getNumber(10));
// getNumber = sum2;
// console.log(getNumber(10));
console.log(sum2(10, 20));
sum2 = getNumber;
console.log(sum2(10, 20));
