"use strict";
class Avengers {
    constructor() {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
let i;
i = new Avengers();
