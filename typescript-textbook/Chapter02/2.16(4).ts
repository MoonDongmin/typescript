type Person = {
    name: string,
    age: number,
    married: boolean,
}

interface PersonConstructor {
    new(name: string, age: number, married: boolean): Person;
}

const Person = function (this: Person, name: string, age: number, married: boolean) {
    this.name = name;
    this.age = age;
    this.married = married;
} as unknown as PersonConstructor;
Person.prototype.sayName = function (this: Person) {
    console.log(this.name);
};

const moon = new Person("Moon", 25, false);
