interface ScatterProps {
    // The data
    xs: number[];
    ys: number[];

    // Display
    xRange: [number, number];
    yRange: [number, number];
    color: string;

    // Events
    onClick: (x: number, y: number, index: number) => void;
}

interface ScatterProps {
    xs: number[];
    ys: number[];
    // ...
    onClick: (x: number, y: number, index: number) => void;

    // 참고: 여기에 속성을 추가하려면, shouldUpdate를 고치세여!
}