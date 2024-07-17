interface Hero {
    power: boolean;
}

interface Person extends Hero {
    name: string;
    age: number;
}

interface Developer extends Person {
    skill: string;
}

let ironman: Developer = {
    name: "아이언맨",
    age: 21,
    skill: "만들기",
    power: true,
};