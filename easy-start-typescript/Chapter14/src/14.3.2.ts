function Person(name: string, age: number) {
    // @ts-ignore
    this.name = name;
    // @ts-ignore
    this.age = age;
}

// @ts-ignore
let captain = new Person("캡틴", 100);
captain instanceof Person;

let hulk = {
    name: "헐크",
    age: 79,
};
hulk instanceof Person; // false

class Person {
    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function fetchInfoByProfile(profile: Person | string) {
    if(profile instanceof Person){
        // profile이 Person 타입으로 간주함
        profile.
    }
    // ...
}