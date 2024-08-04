interface Example<A extends number, B = string> {
    a: A,
    b: B,
}

type Usecase1 = Example<string, boolean>;
type Usecase2 = Example<1, boolean>;
type Usecase3 = Example<number>;

// 하나의 타입 매개변수가 다른 타입 매개변수의 제약이 될 수도 있음
interface Example<A, B extends A> {
    a: A,
    b: B,
}

type Usecase1 = Example<string, number>; // error
type Usecase2 = Example<string, "hello">;
type Usecase3 = Example<number, 123>;

