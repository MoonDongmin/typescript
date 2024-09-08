class Person {
    name?: string;
    age?: number;
    married?: boolean;

    constructor();
    constructor(name: string, married: boolean);
    constructor(name: string, age: number, married: boolean) ;
    constructor(name?: string, age?: number, married?: boolean) {
        if (name) {
            this.name = name;
        }
        if (typeof age === "boolean") {
            this.married = age;
        } else {
            this.age = age;
        }

        if (married) {
            this.married = married;
        }
    } ;
}

const person1 = new Person();
const person2 = new Person("dongmin", true);
const person3 = new Person("moon", 25, false);
