// interface CameraOptions {
//     center?: LngLat;
//     zoom?: number;
//     bearing?: number;
//     pitch?: number;
// }
//
// type LngLat =
//     { lng: number; lat: number; } |
//     { lon: number; lat: number; } |
//     [number, number];
//
// type LngLatBounds =
//     { northeast: LngLat, southwest: LngLat } |
//     [LngLat, LngLat] |
//     [number, number, number, number];
//
// declare function setCamera(camera: CameraOptions): void;
//
// declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;
//
// type Feature = any;
//
// declare function calculateBoundingBox(f: Feature): [number, number, number, number];
//
// function focusOnFeature(f: Feature) {
//     const bounds = calculateBoundingBox(f);
//     const camera = viewportForBounds(bounds);
//     setCamera(camera);
//     const {
//         center: {
//             lat,
//             lng,
//         },
//         zoom,
//     } = camera;
//     //   형식에 lat 속성이 없음
//     //   형식에 lng 속성이 없음
//     zoom;  // 타입이 number | undefined
//     window.location.search = `?v=@${lat},${lng}z${zoom}`;
// }