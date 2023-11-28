interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

// function introduce(someone: Person | Developer) {
//     console.log(someone.);
// }

function introduce(someone: Person | Developer) {
    if ("age" in someone) {
        console.log(someone.age);
        return;
    }
    if ("skill" in someone) {
        console.log(someone.skill);
        return;
    }
}

introduce({
    name: "동민",
    skill: "학생",
});