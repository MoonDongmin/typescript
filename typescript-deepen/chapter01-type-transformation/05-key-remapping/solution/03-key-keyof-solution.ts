import {
  Equal,
  Expect,
} from "../../../helper";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// 내가 접근한 방법
// type AttributeGetters = {
//   [K in `get${keyof Attributes}`]: () => Attributes[K]
// }

type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K]
}

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
