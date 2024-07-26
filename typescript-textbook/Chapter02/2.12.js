class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} 멍멍`);
    }
}

class Cat extends Animal{
    meow(){
        console.log(`${this.name} 야옹`);
    }
}
