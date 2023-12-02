// 1. 타입 별칭으로 API 함수의 응답 형태를 정의
// @ts-ignore
import axios from "axios";

type User1 = {
    id: string;
    name: string;
}

function fetchData1(): User1 {
    // @ts-ignore
    return axios.get("https://localhost:8080/users/1");
}

// 2. 인터페이스 API 함수의 응답 형태를 정의
interface User2 {
    id: string;
    name: string;
}

function fetchData2(): User2 {
    // @ts-ignore
    return axios.get("https://localhost:8080/users/1");
}