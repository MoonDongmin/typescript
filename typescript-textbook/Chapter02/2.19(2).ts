function a(x: string | number): number {
    return 0;
}

type B = (x: string) => number;
let b: B = a;
