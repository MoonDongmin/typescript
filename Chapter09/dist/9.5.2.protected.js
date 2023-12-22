"use strict";
class Person3 {
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
        console.log("HI");
    }
}
class Developer extends Person3 {
    constructor(name, skill) {
        super(name, skill);
        this.sayHi();
    }
    coding() {
        console.log("fun doing " + this.skill + " by " + this.name);
    }
}
let capt = new Person3("캡틴", "방패던지기");
capt.sayHi();
let hulk = new Developer("헐크", "자바스크립티");
hulk.coding();
