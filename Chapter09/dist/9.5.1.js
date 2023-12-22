"use strict";
class Person {
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
}
let moon = new Person("동민", "잠자기");
console.log(moon.name);
moon.name = "동준";
console.log(moon.name);
