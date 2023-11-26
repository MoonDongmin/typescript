interface Person {
    name: string;
    age: number;
}

function logAge(someone: Person) {
    console.log(someone.age);
}

let captain = {
    name: "Capt",
    age: 100,
};
logAge(captain);