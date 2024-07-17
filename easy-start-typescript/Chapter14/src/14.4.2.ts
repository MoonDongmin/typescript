interface Hero {
    name: string;
    nickname: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    age: string;
    skill: string;
}

function isPerson(someone: Hero | Person | Developer): someone is Person {
    return typeof (someone as Person).age === "number";
}

function greet(someone: Hero | Person | Developer) {
    if (isPerson(someone)) {
        console.log(someone.age);
    }
}