type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

type MyConstructorParameters<T> = T extends abstract new (...args: infer P) => any ? P : never;

type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;

type MyInstanceType<T> = T extends abstract new (...args: any) => infer R ? R : never;

type P = MyParameters<(a: string, b: string) => string>;

type R = MyReturnType<(a: string, b: number) => string>;

type CP = MyConstructorParameters<new (a: string, b: number) => {}>;

type I = MyInstanceType<new (a: string, b: number) => {}>;
