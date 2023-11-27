interface Person {
    age: number;
}

function logAge(someone: Person) {
    console.log(someone.age);
}

// 옵션 속성을 써야하는 이유
// function logPersonInfo(you: Person) {
//     console.log(you.name);
//     console.log(you.age);
// }

let dongmin = {age: 100};
logAge(dongmin);