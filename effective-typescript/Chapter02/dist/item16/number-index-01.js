"use strict";
const xs = [1, 2, 3];
const x0 = xs[0]; // OK
const x1 = xs["1"];
//            ~~~ 인덱스 식이 number 형식이 아니므로
//      요소에 암시적으로 any 형식이 있으음
function get(array, k) {
    return array[k];
    //           ~ 인덱스 식이 number 형식이 아니므로
    //   요소에 암시적으로 any 형식이 있음
}
