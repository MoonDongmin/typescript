interface X {
    width: number;
    height: number;
}

interface Y {
    length: number;
    center: number;
}

// 에러
// function objXorY(param: X | Y) {
//     if (param instanceof X) { // error
//         param;
//     } else {
//         param;
//     }
// }

// 에러
// function objXorY(param: X | Y) {
//     if (param.width) { // error
//         param;
//     } else {
//         param;
//     }
// }

function objXorY(param: X | Y) {
    if ('width' in param) {
        param;
    } else {
        param;
    }
}
