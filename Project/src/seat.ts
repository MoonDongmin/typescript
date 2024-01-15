import * as readlineSync from "readline-sync";

function displaySeat(seats: number[]): void {
    console.log("<좌석예약>" + "\n- 0은 빈좌석, 1은 예약된 좌석 -");
    console.log("=============================");
    for (let i = 0; i < seats.length; i++) {
        process.stdout.write(`A${(i + 1)} `);
    }
    console.log("\n=============================");

    for (let seat of seats) {
        process.stdout.write(`${seat}  `);
    }
    console.log();
}

function seatReservation(seats: number[], people: number, selectedSeats: string): boolean {
    const selectedSeatArray = selectedSeats.split(" ");
    console.log(selectedSeatArray);

    for (let seat of selectedSeatArray) {
        const seatIndex = parseInt(seat.substring(1));
        console.log(seatIndex);

        if (isNaN(seatIndex) || selectedSeatArray.length != people || seatIndex > seats.length || seatIndex < 0) {
            console.log(`"${seat}"의 올바른 좌석 번호를 선택하세요.`);
            return false;
        }
        if (seats[seatIndex - 1] === 0) {
            seats[seatIndex - 1] = 1;
        } else {
            console.log(`선택한 좌석 "${seat}"가 이미 예약되었습니다. 다른 좌석을 선택하세요.`);
            return false;
        }
    }
    return true;
}

function seatMain(): void {
    let seats: number[] = new Array(10).fill(0);
    displaySeat(seats);

    const numberOfPeople = readlineSync.questionInt("인원 수를 입력해 주세요: ");
    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        console.log("올바른 숫자를 입력하세요.");
        return;
    }

    let selectedSeat = readlineSync.question("원하는 좌석을 선택하세요 (A1 ~ A10까지): ").toUpperCase();

    const reservationSuccess = seatReservation(seats, numberOfPeople, selectedSeat);

    if (reservationSuccess) {
        console.log(`${numberOfPeople}명의 좌석 예약이 완료되었습니다.`);
    } else {
        console.log("좌석 예약에 실패했습니다.");
    }
    displaySeat(seats);
}

seatMain();