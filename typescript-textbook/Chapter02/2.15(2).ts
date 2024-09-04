interface X {
    x: number;
}

interface XY {
    x: number;
    y: number;
}

interface YX extends X {
    y: number;
}

type A = XY extends X ? string : number;
type B = YX extends X ? string : number;
