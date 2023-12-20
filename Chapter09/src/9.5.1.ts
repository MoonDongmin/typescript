class Person {
    name: string;
    skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }
}

let moon = new Person("동민", "잠자기");
console.log(moon.name);
moon.name = "동준";
console.log(moon.name);