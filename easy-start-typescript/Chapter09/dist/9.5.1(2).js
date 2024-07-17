"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WaterPurifier_waterAmount;
class WaterPurifier {
    constructor(waterAmount) {
        _WaterPurifier_waterAmount.set(this, void 0);
        __classPrivateFieldSet(this, _WaterPurifier_waterAmount, waterAmount, "f");
    }
    wash() {
        if (__classPrivateFieldGet(this, _WaterPurifier_waterAmount, "f") > 0) {
            console.log("정수기 동작 성공");
        }
    }
}
_WaterPurifier_waterAmount = new WeakMap();
let purifier = new WaterPurifier(30);
purifier.wash();
purifier. = 0;
purifier.wash();
