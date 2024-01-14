export class B {
    constructor(value = 1) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    method() {
        console.log(`value: ${this.value}`);
    }
}
