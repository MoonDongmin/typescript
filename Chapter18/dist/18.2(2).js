"use strict";
let heroes = ["capt", "hulk", "thor"];
let heroAttendance = heroes.map(function (hero) {
    return {
        [hero]: true,
    };
});
console.log(heroAttendance);
