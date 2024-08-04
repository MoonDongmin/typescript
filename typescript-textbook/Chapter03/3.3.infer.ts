type MyParameters<T extends (...args: any) => any>
    = T extends (...args: infer P) => any ? P : never;

type MyConstructorParameters<T extends abstract new (...args: any) => any>
    = T extends abstract new  (...args: infer P) => any ? P : never;

type MyReturnType<T extends (...args: any) => any>
    = T extends (...args: infer P) => infer R ? R : any;

type MyInstanceType<T extends abstract new  (...args: any) => any>
    = T extends abstract new (...args: infer P) => infer R ? R : any;
