// import * as readline from "readline";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

export interface Movie {
    title: string;
    genre: string;
    rating: number;
    summary: string;
    showTime: string[];
}

export const movies: Movie[] = [
    {
        title: "인투더 월드",
        genre: "애니메이션",
        rating: 8.70,
        summary: "우린 멋진 모험을 하게 될 거야! 하지만 불시착했습니다. 어디로 가야 될까요? 가족을 과잉보호하는 아빠 ‘맥’ " +
            "때문에 평생을 작은 연못에서 안전하게 살아온 말러드 가족….",
        showTime: ["11:00", "13:00", "15:10", "17:10"],
    },
    {
        title: "외계+인 2부",
        genre: "SF",
        rating: 8.51,
        summary: "반드시 돌아가야 한다. 모두를 지키기 위해! 인간의 몸속에 가둬진 외계인 죄수의 탈옥을 막으려다 과거에 갇혀버린" +
            " ‘이안’(김태리)은 우여곡절 끝에 시간의 문을 열 수 있는 ‘신검’을 되찾…",
        showTime: ["10:40", "13:10", "15:40", "18:10", "20:40"],
    },
    {
        title: "위시",
        genre: "애니메이션",
        rating: 7.33,
        summary: "제81회 골든 글로브 장편 애니메이션상 노미네이트 <겨울왕국> 시리즈, <모아나>를 잇는 디즈니 100주년 기념작" +
            " \"나 이렇게 소원을 빌어. 지금보다 더 큰 꿈 꿀 수 있는 우리\" 소원이 …",
        showTime: ["10:30", "12:30", "14:30", "16:30", "21:00"],
    },
    {
        title: "노량: 죽음의 바다",
        genre: "액션",
        rating: 8.36,
        summary: "임진왜란 발발로부터 7년이 지난 1598년 12월. 이순신(김윤석)은 왜군의 수장이던 도요토미 히데요시가 " +
            "갑작스럽게 사망한 뒤 왜군들이 조선에서 황급히 퇴각하려 한다는 것을 알게 …",
        showTime: ["11:00", "14:00", "17:00", "20:00"],
    },
    {
        title: "서울의 봄",
        genre: "드라마",
        rating: 9.54,
        summary: "1979년 12월 12일, 수도 서울 군사반란 발생 그날, 대한민국의 운명이 바뀌었다 대한민국을 뒤흔든 10월 26일 이후" +
            ", 서울에 새로운 바람이 불어온 것도 잠시 12월 12일, 보안사령관 …",
        showTime: ["12:00", "14:50", "17:40", "20:30"],
    },
];

export function showMovieList(): void {
    console.log("==== 2024년 1월 영화 리스트 === ");
    for (let i = 0; i < movies.length; i++) {
        console.log(`${i + 1}. ${movies[i].title}`);
    }
    console.log("===============================");
}

export function showMovieDetail(userInput: number): void {
    const selectMovie = movies[userInput - 1];
    console.log("===============================");
    console.log(`영화 제목: ${selectMovie.title}`);
    console.log(`장르: ${selectMovie.genre}`);
    console.log(`평점: ${selectMovie.rating}`);
    console.log(`줄거리: ${selectMovie.summary}`);
    console.log("===============================");
}

export function showMovieTime(userInput: number): void {
    console.log("=============================");
    console.log(`<${movies[userInput - 1].title}> 상영시간 `);
    console.log(`${movies[userInput - 1].showTime} `);
    console.log("=============================");
}





