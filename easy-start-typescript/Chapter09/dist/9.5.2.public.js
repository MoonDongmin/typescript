"use strict";
class WaterPurifier2 {
    constructor(waterAmount) {
        Object.defineProperty(this, "waterAmount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.waterAmount = waterAmount;
    }
    wash() {
        if (this.waterAmount > 0) {
            console.log("정수기 동작 성공");
        }
    }
}
let purifier2 = new WaterPurifier2(30);
purifier2.wash();
purifier2.waterAmount = 0;
