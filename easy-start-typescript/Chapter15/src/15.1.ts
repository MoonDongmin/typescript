// 호환되지 않는 경우
// let a: string = "hi";
// let b: number = 10;
// b = a;

// 호환되는 경우
let a: string = "hi";
let b: "hi" = "hi";
a = b;
// b=a;