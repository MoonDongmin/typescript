class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    logAge() {
        console.log(this.age);
    }
}

class Developer extends Person {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }

    logDeveloperInfo() {
        this.logAge();
        console.log(this.name);
        console.log(this.skill);
    }
}

let me = new Developer('동민', 24, 'TS');
me.logDeveloperInfo();