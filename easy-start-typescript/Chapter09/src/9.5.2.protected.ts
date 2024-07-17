class Person3 {
    private name: string;
    private skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    protected sayHi(): void {
        console.log("HI");
    }
}

class Developer extends Person3 {
    constructor(name: string, skill: string) {
        super(name, skill);
        this.sayHi();
    }

    coding(): void {
        console.log("fun doing " + this.skill + " by " + this.name);
    }
}

let capt = new Person3("캡틴", "방패던지기");
capt.sayHi();

let hulk = new Developer("헐크", "자바스크립티");
hulk.coding();