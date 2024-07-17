// let cap = {
//     name: '캡틴',
//     skill: '방패 던지기'
// }
//
// let moon = {
//     name: '동민',
//     skill: 'typescript'
// }

function Person(name, skill) {
    this.name = name;
    this.skill = skill;
}

let cap = new Person('캡틴', '방패 던지기');
let moon = new Person('동민', 'typescript');