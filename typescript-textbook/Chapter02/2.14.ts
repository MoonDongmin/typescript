interface Dongmin {
    type: "human",
    race: "yellow",
    name: "Dongmin",
    age: 25
}

interface Moon {
    type: "human",
    race: "yellow",
    name: "moon",
    age: 30
}

// 제네릭을 사용해 중복 제거
interface Person<N, A> {
    type: "human",
    race: "yellow",
    name: N,
    age: A
}

interface Dongmin extends Person<"Dongmin", 25> {
}

interface Moon extends Person<"Moon", 30> {
}

// 함수에서는 함수 선언문이나 표현식이냐에 따라 제네릭 표기 위치가 다르기에 주의
const personFactoryE = <N, A>(name: N, age: A) => ({
    type: "human",
    race: "yellow",
    name,
    age,
});

function personFactoryD<N, A>(name: N, age: A) {
    return ({
        type: "human",
        race: "yellow",
        name,
        age,
    });
}

// 상수타입 매개변수
function values<T>(initial: T[]) {
    return {
        hasValue(value: T) {
            return initial.includes(vlaue);
        },
    };
}

const savedValues = values(["a", "b", "c"]);
savedValues.hasValue("x");
