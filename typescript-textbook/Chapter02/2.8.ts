type A = string;
const str: A = "hello";

const func1: (value: number, unit: string) => string = (value, unit) => value + unit;

type ValueWithUnit = (value: number, unit: string) => string;
const func2: ValueWithUnit = (value, unit) => value + unit;
