namespace Example {
    export interface Inner {
        test: string;
    }

    export type test2 = number;
}

const ex1: Example.Inner = {
    test: "hello",
};

const ex2: Example.test2 = 123;


namespace Example {
    namespace Outer {
        export interface Inner {
            test: string;
        }

        export type test2 = number;
    }
}

const ex1: Example.Outer.Inner = {
    test: "hello",
};

const ex2: Example.Outer.test2 = 123;
