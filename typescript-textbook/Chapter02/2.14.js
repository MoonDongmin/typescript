const person1 = {
    type: "human",
    race: "yellow",
    name: "dongmin",
    age: 25,
};
const person2 = {
    type: "human",
    race: "yellow",
    name: "moon",
    age: 30,
};

// 위를 함수로 고칠 수 있음
const personFactory = (name, age) => ({
    type: 'human',
    race: 'yellow',
    name,
    age,
})
const person1 = personFactory('dongmin', 25);
const person2 = personFactory('moon', 30);
