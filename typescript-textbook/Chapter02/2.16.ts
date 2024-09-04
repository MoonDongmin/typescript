function example(a: string, b?: number, c = false) {

}

example("hi", 123, true);
example("hi", 123);
example("hi");

function example1(a: string, ...b: number[]) {
}

example1("hi", 123, 4, 56);

// function example2(...a: string[], b: number) {
// } // error

function example3(...args: [number, string, boolean]) {
}

example3(1, "2", false);

function example4(...args: [a: number, b: string, c: boolean]) {
}
