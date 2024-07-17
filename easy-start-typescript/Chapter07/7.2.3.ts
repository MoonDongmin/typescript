interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    skill: string;
}

let dongmin: Developer = {
    name: "동민",
    age: 23,
    skill: "TypeScript",
};