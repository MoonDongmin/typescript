function Person(name, skill) {
    this.name = name;
    this.skill = skill;
}

Person.prototype.sayHi = function () {
    console.log('hi');
}

let moon = new Person('동민', '한밭대 대학생');
console.log(moon.name);
console.log(moon.skill);
moon.sayHi();