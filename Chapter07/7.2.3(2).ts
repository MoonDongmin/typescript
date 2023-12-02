type Person = {
    name: string;
    age: number;
}

type Developer = {
    skill: string;
}

let dongmin: Person & Developer = {
    name: "동민",
    age: 23,
    skill: "TypeScript",
};