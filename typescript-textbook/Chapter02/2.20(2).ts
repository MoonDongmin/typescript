interface Human {
    name: string;
    age: number;
    married: boolean;

    sayName(): void;
}

class Person implements Human {
    name;
    age;
    married;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
    }

    sayName() {
        return "dongmin";
    }
}
