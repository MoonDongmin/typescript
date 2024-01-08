let myName = "동민" as string;


interface Person {
    name: string;
    age: number;
}

// ERROR 발생
// let moon = {};
// moon.name = "동민";
// moon.age = 25;

// 문제해결
let moon1: Person = {
    name: "동민",
    age: 25,
};

// 타입 단언 사용
let moon2 = {} as Person;
moon2.name = "동민";
moon2.age = 25;
