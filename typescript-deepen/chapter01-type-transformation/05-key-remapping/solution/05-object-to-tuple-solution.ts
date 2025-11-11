import {
  Equal,
  Expect,
} from "../../../helper";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

// 해법은 다음과 같음
// type Temp = {
//   [K in keyof Values]: [K, Values[K]];
// };

// 위 코드는 다음과 같이 반환 될 것임
// type Temp = {
//   a: ["a", string];
//   b: ["b", number];
//   c: ["c", boolean];
// };

// type Temp = {
//   a: ["a", string];
//   b: ["b", number];
//   c: ["c", boolean];
// };
//
// type Result = Temp[keyof Temp];

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
