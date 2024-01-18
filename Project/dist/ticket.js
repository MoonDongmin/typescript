import { movies, showMovieList, showMovieTime, } from "./movie";
import * as readlineSync from "readline-sync";
import { seatMain } from "./seat";
export function ticket(title, time, people) {
    console.log(`${movies[title - 1].title}`);
    console.log(`상영시간: ${movies[title - 1].showTime[time - 1]}`);
    console.log(`인원: ${people}`);
    console.log(`총 가격: ${people * 14000}`);
}
export function ticketing() {
    showMovieList();
    const selectMovie = readlineSync.questionInt("예매를 원하는 영화 번호를 고르시오: ");
    showMovieTime(selectMovie);
    const selectTime = readlineSync.questionInt("상영 시간을 고르시오: ");
    const numberOfPeople = seatMain();
    ticket(selectMovie, selectTime, numberOfPeople);
}
