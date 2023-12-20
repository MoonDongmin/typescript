var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    return Person;
}());
var moon = new Person("동민", "잠자기");
console.log(moon.name);
moon.name = "동준";
console.log(moon.name);
