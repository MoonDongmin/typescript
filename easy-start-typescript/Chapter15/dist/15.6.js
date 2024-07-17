"use strict";
// 아무것도 정의하지 않은 제네릭은 타입 호환 가능
// interface Empty<T> {
//
// }
//
// let empty1: Empty<string>;
// let empty2: Empty<number>;
//
// empty2 = empty1;
// empty1 = empty2;
let notEmpty1;
let notEmpty2;
// 위와 같이 작성하면 타입 호환이 되지 않음
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;
