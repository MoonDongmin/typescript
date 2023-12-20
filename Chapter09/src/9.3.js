class Person {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
    }

    sayHi() {
        console.log('HI');
    }
}

class Developer extends Person {
    constructor(name, skill) {
        super(name, skill);
        this.sayHi();
    }

    // coding() {
    //     console.log('fun');
    // }
    coding() {
        console.log('fun doing' + this.skill + ' by ' + this.name);
    }

}

let moon = new Developer('동민', '잠자기');
moon.coding();

// console.log(moon.name);
// console.log(moon.skill);
// moon.sayHi();