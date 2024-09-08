function a(x: string): number {
    return 0;
}

type B = (x: string) => number | string;
let b: B = a;
