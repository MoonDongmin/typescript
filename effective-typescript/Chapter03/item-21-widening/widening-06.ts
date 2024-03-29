import * as console from "console";

interface Vector3 {
    x: number;
    y: number;
    z: number;
}

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
    return vector[axis];
}

const a1 = [1, 2, 3];
const a2 = [1, 2, 3] as const;