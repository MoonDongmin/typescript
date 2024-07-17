const str: string = "hello";
const num: number = 123;
const bool: boolean = false;
const n: null = null;
const u: undefined = undefined;
const sym: symbol = Symbol("sym");
const big: bigint = 1000000000n;
const obj: Object = {hello: "world"};

// function
function plus(x: number, y: number): number {
    return x + y;
}

const minus = (x: number, y: number): number => x - y;
