"use strict";
class Chatgpt {
    constructor(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
    }
    sum(a, b) {
        return a + b;
    }
}
let gpt = new Chatgpt("대화형 API");
gpt.sum(10, 20);
