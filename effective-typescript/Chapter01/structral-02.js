// 벡터 길이 계산 함수
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
function normalize(v) {
    var length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}
console.log(normalize({ x: 3, y: 4, z: 5 }));
// const v: NamedVector = {
//     x: 3,
//     y: 4,
//     name: "Moon",
// };
// calculateLength(v);
