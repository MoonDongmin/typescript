interface Vector2D {
    x: number;
    y: number;
}
function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
interface NamedVector {
    name: string;
    x: number;
    y: number;
}
interface Vector3D {
    x: number;
    y: number;
    z: number;
}
function calculateLengthL1(v: Vector3D) {
    let length = 0;
    for (const axis of Object.keys(v)) {
        const coord = v[axis];
        // ~~~~~~~ string은 Vector3D의 인덱스로 사용할 수 없기에
        //         엘리먼트는 암시적으로 any 타입
        length += Math.abs(coord);
    }
    return length;
}
const vec3D = {x: 3, y: 4, z: 1, address: '123 Broadway'};
calculateLengthL1(vec3D);  // OK, returns NaN