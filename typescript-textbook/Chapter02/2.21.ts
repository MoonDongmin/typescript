abstract class AbstractPerson {
    name: string;
    age: number;
    married: boolean = false;
    abstract value: number;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
    }

    sayName() {
        console.log(this.name);
    }

    abstract sayAge(): void;

    abstract sayMarried(): void;
}

class RealPerson extends AbstractPerson {
    value: number = 0;

    sayAge() {
        console.log(this.name);
    }

    sayMarried() {
        console.log(this.married);
    }
}
