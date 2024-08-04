type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type Result = MyOmit<{ a: "1", b: 2, c: true }, "a" | "c">;
