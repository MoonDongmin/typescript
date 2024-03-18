import * as readlineSync from "readline-sync";
import { showMovieDetail, showMovieList, showMovieTime, } from "./movie";
import { ticketing } from "./ticket";
function main() {
    while (true) {
        const userInput = readlineSync.questionInt("1. 영화리스트 | 2. 영화 상세정보 |3. 영화 상영 시간 | 4. 영화예약 | 5. 종료 : ");
        if (userInput === 1) {
            showMovieList();
        }
        else if (userInput === 2) {
            showMovieList();
            const movieNumber = readlineSync.questionInt("보고싶은 영화 상세 정보 번호를 누르시오: ");
            showMovieDetail(movieNumber);
        }
        else if (userInput === 3) {
            showMovieList();
            const movieTime = readlineSync.questionInt("상영시간을 알고싶은 영화 번호를 누르시오: ");
            showMovieTime(movieTime);
        }
        else if (userInput === 4) {
            ticketing();
        }
        else if (userInput === 5) {
            console.log("프로그램을 종료합니다.");
            break;
        }
        else {
            console.log("잘못된 입력을 하셨습니다.");
        }
    }
}
main();
