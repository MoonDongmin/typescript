type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
type Result = Optional<{ a: "hi", b: 123 }, "a">;
