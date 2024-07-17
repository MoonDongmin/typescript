interface Person {
    name: string;
    age: number;
    industry: "common";
}

interface Developer {
    name: string;
    skill: string;
    industry: "tech";
}

function greet(someone: Person | Developer) {
    if (someone.industry === 'common') {
        // if 문 안에서 someone은 Person 타입
        someone.
    }
}