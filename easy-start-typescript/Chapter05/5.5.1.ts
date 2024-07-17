interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    skill: string;
}

let ironman: Developer = {
    name: "아이언맨",
    age: 21,
    skill: "하늘 날기",
};