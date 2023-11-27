interface Person {
    name?: string;
    age: number;
}

function logAge(someone: Person) {
    console.log(someone.age);
}

let dongmin = {age: 100};
logAge(dongmin);