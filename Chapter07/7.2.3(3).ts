type Person = {
    name: string;
    age: number;
}

type Developer = {
    skill: string;
}

type Dongmin = Person & Developer;

let dongmin: Dongmin = {
    name: "동민",
    age: 23,
    skill: "TypeScript",
};