"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seatMain = void 0;
var readlineSync = require("readline-sync");
function displaySeat(seats) {
    console.log("<좌석예약>" + "\n- 0은 빈좌석, 1은 예약된 좌석 -");
    console.log("=============================");
    for (var i = 0; i < seats.length; i++) {
        process.stdout.write("A".concat((i + 1), " "));
    }
    console.log("\n=============================");
    for (var _i = 0, seats_1 = seats; _i < seats_1.length; _i++) {
        var seat = seats_1[_i];
        process.stdout.write("".concat(seat, "  "));
    }
    console.log();
}
function seatReservation(seats, people, selectedSeats) {
    var selectedSeatArray = selectedSeats.split(" ");
    for (var _i = 0, selectedSeatArray_1 = selectedSeatArray; _i < selectedSeatArray_1.length; _i++) {
        var seat = selectedSeatArray_1[_i];
        var seatIndex = parseInt(seat.substring(1));
        if (isNaN(seatIndex) || selectedSeatArray.length != people || seatIndex > seats.length || seatIndex < 0) {
            console.log("\"".concat(seat, "\"\uC758 \uC62C\uBC14\uB978 \uC88C\uC11D \uBC88\uD638\uB97C \uC120\uD0DD\uD558\uC138\uC694."));
            return false;
        }
        if (seats[seatIndex - 1] === 0) {
            seats[seatIndex - 1] = 1;
        }
        else {
            console.log("\uC120\uD0DD\uD55C \uC88C\uC11D \"".concat(seat, "\"\uAC00 \uC774\uBBF8 \uC608\uC57D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uC88C\uC11D\uC744 \uC120\uD0DD\uD558\uC138\uC694."));
            return false;
        }
    }
    return true;
}
function seatMain() {
    var seats = new Array(10).fill(0);
    displaySeat(seats);
    var numberOfPeople = readlineSync.questionInt("인원 수를 입력해 주세요: ");
    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        console.log("올바른 숫자를 입력하세요.");
    }
    var selectedSeat = readlineSync.question("원하는 좌석을 선택하세요 (A1 ~ A10까지): ").toUpperCase();
    var reservationSuccess = seatReservation(seats, numberOfPeople, selectedSeat);
    if (reservationSuccess) {
        console.log("".concat(numberOfPeople, "\uBA85\uC758 \uC88C\uC11D \uC608\uC57D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
    }
    else {
        console.log("좌석 예약에 실패했습니다.");
    }
    displaySeat(seats);
    return numberOfPeople;
}
exports.seatMain = seatMain;
