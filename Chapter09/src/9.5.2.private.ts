class Person2 {
    private name: string;
    private skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    private sayHi() {
        console.log("Hi");
    }
}

let moon2 = new Person2("동민", "잠자기");
console.log(moon2.name);

