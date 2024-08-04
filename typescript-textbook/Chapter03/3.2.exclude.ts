type MyExclude<T, U> = T extends U ? never : T;
type Result = MyExclude<1 | "2" | 3, string>;
