import {
  Equal,
  Expect,
} from "../../../helper";

type Fruit =
  | {
  name: "apple";
  color: "red";
}
  | {
  name: "banana";
  color: "yellow";
}
  | {
  name: "orange";
  color: "orange";
};

type TransformedFruit = {
  [K in Fruit as K["color"]]: `${K["name"]}:${K["color"]}`
}[Fruit["color"]]

type Test = {
  [K in Fruit as K["color"]]: `${K["name"]}:${K["color"]}`
}

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
