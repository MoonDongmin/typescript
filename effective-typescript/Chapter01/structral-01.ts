interface Vector2D {
    x: number;
    y: number;
}

// 벡터 길이 계산 함수
function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

// 이름이 들어간 벡터 추가
interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector = {
    x: 3,
    y: 4,
    name: "Moon",
};
calculateLength(v);