interface Person {
    name: string,
    age: number;
    married: boolean
}

const person2: Person = {
    name: "동민",
    age: 25,
    married: false,
};

interface Func {
    (x: number, y: number): number;
}

const add: Func = (x, y) => x + y;

interface Arr {
    length: number;

    [key: number]: string;
}

const arr: Arr = ["3", "5", "7"];

interface NoProp {
}

const obj: NoProp = {
    why: "에러안남",
};
const what: NoProp = "이게 되네?";
const omg: NoProp = null; // error
