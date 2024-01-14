"use strict";
function isPerson(someone) {
    return typeof someone.age === "number";
}
function greet(someone) {
    if (isPerson(someone)) {
        console.log(someone.age);
    }
}
