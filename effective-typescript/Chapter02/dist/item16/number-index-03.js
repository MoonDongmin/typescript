"use strict";
const xs = [1, 2, 3];
function checkedAccess(xs, i) {
    if (i < xs.length) {
        return xs[i];
    }
    throw new Error(`배열의 끝을 지나서 ${i} 를 접근하려고 했음.`);
}
