type MyNonNullable = T extends null | undefined ? never : T;
type Result = MyNonNullable<string | number | null | undefined>;

// 요즘
type MyNonNullable<T> = T & {};
