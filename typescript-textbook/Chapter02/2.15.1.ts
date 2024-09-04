// type Start = string | number;
// type Result = Start extends string ? Start[] : never; // Result는 never 타입


type Start = string | number;
type Result<Key> = Key extends string ? Key[] : never;
let n: Result<Start> = ["hi"];


