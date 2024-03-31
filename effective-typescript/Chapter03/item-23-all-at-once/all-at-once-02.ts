interface Point {
    x: number;
    y: number;
}

const pt: Point = {};
// ~~ '{}' 형식에 Point x, y 속성이 없음
pt.x = 3;
pt.y = 4;