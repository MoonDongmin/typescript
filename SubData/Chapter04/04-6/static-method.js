"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = exports.C = void 0;
var C = /** @class */ (function () {
    function C() {
    }
    C.whoAreYou = function () {
        return "I'm class C";
    };
    return C;
}());
exports.C = C;
var D = /** @class */ (function () {
    function D() {
    }
    D.whoAreYou = function () {
        return "I'm class D";
    };
    return D;
}());
exports.D = D;
console.log(C.whoAreYou());
console.log(D.whoAreYou());
