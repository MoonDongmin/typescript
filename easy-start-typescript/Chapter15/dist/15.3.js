"use strict";
// // capt = moon 의 에러 해결 방법 1
// type Person = {
//     name: string;
//     skill: string;
// }
//
// interface Developer {
//     name: string;
//     skill: string;
// }
//
// let moon: Person = {
//     name: "동민",
// };
//
// let capt: Developer = {
//     name: "캡틴",
//     skill: "방패 던지기",
// };
//
// moon = capt;
// capt = moon;
let moon = {
    name: "동민",
};
let capt = {
    name: "캡틴",
    skill: "방패 던지기",
};
moon = capt;
capt = moon;
