interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark(): void;
}

interface Cat extends Animal {
    meow(): void;
}

type Animal2 = {
    name: string;
}
type Dog2 = Animal & {
    bark(): void;
}
type Cat2 = Animal & {
    meow(): void;
}
type Name = Cat["name"];
