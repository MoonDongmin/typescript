"use strict";
function Person(name, age) {
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
    constructor(name, age) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.age = age;
    }
}
function fetchInfoByProfile(profile) {
    if (profile instanceof Person) {
        // profile이 Person 타입으로 간주함
        profile.
        ;
    }
    // ...
}
