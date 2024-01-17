"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketing = exports.ticket = void 0;
var movie_1 = require("./movie");
var readlineSync = require("readline-sync");
var seat_1 = require("./seat");
function ticket(title, time, people) {
    console.log("".concat(movie_1.movies[title - 1].title));
    console.log("\uC0C1\uC601\uC2DC\uAC04: ".concat(movie_1.movies[title - 1].showTime[time - 1]));
    console.log("\uC778\uC6D0: ".concat(people));
    console.log("\uCD1D \uAC00\uACA9: ".concat(people * 14000));
}
exports.ticket = ticket;
function ticketing() {
    (0, movie_1.showMovieList)();
    var selectMovie = readlineSync.questionInt("예매를 원하는 영화 번호를 고르시오: ");
    (0, movie_1.showMovieTime)(selectMovie);
    var selectTime = readlineSync.questionInt("상영 시간을 고르시오: ");
    var numberOfPeople = (0, seat_1.seatMain)();
    ticket(selectMovie, selectTime, numberOfPeople);
}
exports.ticketing = ticketing;
