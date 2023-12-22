"use strict";
class Person2 {
    constructor(name, skill) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "skill", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.skill = skill;
    }
    sayHi() {
        console.log("Hi");
    }
}
let moon2 = new Person2("동민", "잠자기");
console.log(moon2.name);
