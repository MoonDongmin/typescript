class Person {
    name: string;
    age: number;
    married: boolean;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
    }
}

// 클래스 표현식
const Person = class {
    name;
    age;
    married;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
    }
};
