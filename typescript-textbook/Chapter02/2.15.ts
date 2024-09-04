type A1 = string;
type B1 = A1 extends string ? number : boolean;

type A2 = number;
type B2 = A2 extends string ? number : boolean;
