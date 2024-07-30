interface A {
    name: string;
}

interface B {
    name: string;
    age: number;
}

const aObj = {
    name: "dongmin",
};
const bObj = {
    name: "moon",
    age: 25,
};

const aToA: A = aObj;
const bToA: A = bObj;
const aToB: B = aObj; // error
const bToB: B = bObj;

// 튜플은 배열보다 좁은 타입임. 따라서 튜플은 배열에 대입할 수 있으나, 배열은 튜플에 대입할 수 없음
let a: ["hi", "readonly"] = ["hi", "readonly"];
let b: string[] = ["hi", "normal"];

a = b; // error
b = a;

// 두 객체가 있고 속성이 동일할 때, 속성이 옵셔널인 객체가 옵셔널이지 않은 객체보다 더 넓은 타입
type Optional = {
    a?: string;
    b?: string;
}
type Mandatory = {
    a: string;
    b: string;
}

const o: Optional = {
    a: "hello",
};
const m: Mandatory = {
    a: "hello",
    b: "world",
};
const o2: Optional = m;
const m2: Mandatory = o; // error
