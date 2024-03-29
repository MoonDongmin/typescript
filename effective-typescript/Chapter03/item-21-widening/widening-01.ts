interface Vector3 {
    x: number;
    y: number;
    z: number;
}

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
    return vector[axis];
}

let x = 'x';
let vec = {x: 10, y: 20, z: 30};
getComponent(vec, x);
// string 형식의 인수는 "x" | "y" | "z" 형식의 매개변수에 할당될 수 없음