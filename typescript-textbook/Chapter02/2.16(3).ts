type Animal = {
    age: number;
    type: "dog";
};
const person = {
    name: "dongmin",
    age: 25,
    sayName() {
        this;
        this.name;
    },
    sayAge(this: Animal) {
        this;
        this.type;
    },
};

person.sayAge.bind({
    age: 3,
    type: "dog",
});
